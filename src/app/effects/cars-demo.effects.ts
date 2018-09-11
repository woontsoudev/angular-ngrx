import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { CarsDemoService } from '../services/cars-demo.service';
import * as CarsDemoActions from '../actions/cars-demo.actions';

@Injectable()
export class CarsDemoEffects {
  @Effect()
  getCars$: Observable<Action> = this.action$.pipe(
    ofType(CarsDemoActions.GET_CARS),
    switchMap(
      (): any => {
        return this.carsDemoService.getCars().pipe(
          // crear setCarsAction
          map(data => {
            console.log(data);
            return new CarsDemoActions.SetCars(data);
          })
        );
      }
    )
  );

  constructor(
    private action$: Actions,
    private carsDemoService: CarsDemoService
  ) {}
}
