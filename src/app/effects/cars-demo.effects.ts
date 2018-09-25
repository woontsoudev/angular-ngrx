import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

import { CarsDemoService } from '../services/cars-demo.service';
import * as CarsDemoActions from '../actions/cars-demo.actions';
import * as LayoutActions from '../actions/layout.actions';
import { Car } from '../models/car.model';

@Injectable()
export class CarsDemoEffects {
  @Effect()
  getCars$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.GET_CARS),
    switchMap(
      (): Observable<CarsDemoActions.SetCars> => {
        return this.carsDemoService.getCars().pipe(
          map(
            (cars: Car[]): any => {
              return new CarsDemoActions.SetCars(cars);
            }
          )
        );
      }
    )
  );

  @Effect()
  editCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.EDIT_CAR),
    map((action: CarsDemoActions.EditCar) => action.payload),
    switchMap(
      (car): Action[] => {
        return [
          new LayoutActions.ToggleCarsDemoModal(),
          new CarsDemoActions.SetEditingCar(car)
        ];
      }
    )
  );

  @Effect()
  updateCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.UPDATE_CAR),
    map((action: CarsDemoActions.UpdateCar) => action.payload),
    switchMap(
      (car): Observable<{}> => {
        return this.carsDemoService.updateCar(car).pipe(
          map((res: Car) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Done',
              detail: `${res.brand} was edited`
            });
            return res;
          })
        );
      }
    ),
    switchMap(
      (car): Action[] => {
        return [
          new CarsDemoActions.SaveCar(car),
          new LayoutActions.ToggleCarsDemoModal()
        ];
      }
    )
  );

  @Effect()
  createCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.CREATE_CAR),
    switchMap(
      (): Action[] => {
        return [
          new LayoutActions.ToggleCarsDemoModal(),
          new CarsDemoActions.SetEditingCar('')
        ];
      }
    )
  );

  @Effect()
  addCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.ADD_CAR),
    map((action: CarsDemoActions.AddCar) => action.payload),
    switchMap(
      (car): Observable<{}> => {
        return this.carsDemoService.addCar(car).pipe(
          map((res: Car) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Done',
              detail: `${res.brand} was added`
            });
            return res;
          })
        );
      }
    ),
    switchMap(
      (data): Action[] => {
        return [
          new CarsDemoActions.SaveCar(data),
          new LayoutActions.ToggleCarsDemoModal()
        ];
      }
    )
  );

  @Effect()
  deleteCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.DELETE_CAR),
    map((action: CarsDemoActions.DeleteCar) => action.payload),
    switchMap((car: Car) => {
      return this.carsDemoService.deleteCar(car.id).pipe(
        map(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Done',
            detail: `${car.brand} was successfully deleted`
          });
          return car;
        })
      );
    }),
    switchMap(
      (car: Car): Action[] => {
        return [new CarsDemoActions.RemoveCar(car.id)];
      }
    )
  );

  constructor(
    private action$: Actions,
    private carsDemoService: CarsDemoService,
    private messageService: MessageService
  ) {}
}
