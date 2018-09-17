import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

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
      (): Observable<any> => {
        return this.carsDemoService.getCars().pipe(
          map(data => {
            return new CarsDemoActions.SetCars(data);
          }),
          catchError(err => {
            return of([err]);
          })
        );
      }
    )
  );

  @Effect()
  editCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.EDIT_CAR),
    switchMap(
      (data): Action[] => {
        return [
          new LayoutActions.ToggleCarsDemoModal(),
          new CarsDemoActions.SetEditingCar(
            (<{ payload?: string }>data).payload
          )
        ];
      }
    )
  );

  @Effect()
  updateCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.UPDATE_CAR),
    switchMap(
      (data): any => {
        return this.carsDemoService
          .updateCar((<{ payload?: Car }>data).payload)
          .pipe(
            map((res: Car) => {
              return res;
            }),
            catchError(err => {
              return of([err]);
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
  createCar$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.CREATE_CAR),
    switchMap(
      (data): Action[] => {
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
    switchMap(
      (data): any => {
        return this.carsDemoService
          .addCar((<{ payload?: Car }>data).payload)
          .pipe(
            map((res: Car) => {
              return res;
            }),
            catchError(err => {
              return of([err]);
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

  constructor(
    private action$: Actions,
    private carsDemoService: CarsDemoService
  ) {}
}
