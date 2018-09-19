import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { PropertiesService } from '../services/properties.service';
import * as PropertiesActions from '../actions/properties.actions';
import { Property } from '../models/property.model';
import { Unit } from '../models/unit.model';

@Injectable()
export class PropertiesEffects {
  @Effect()
  getProperties$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.GET_PROPERTIES),
    switchMap(
      (): Observable<PropertiesActions.SetProperties> => {
        return this.propertiesService.getProperties().pipe(
          map(
            (properties: Property[]): any => {
              return new PropertiesActions.SetProperties(properties);
            }
          ),
          catchError(err => {
            return of([err]);
          })
        );
      }
    )
  );

  @Effect()
  setDefaultProperty$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.SET_PROPERTIES),
    map((action: PropertiesActions.SetProperties) => action.payload),
    switchMap(
      (properties): Action[] => {
        return [new PropertiesActions.SetProperty(properties[0])];
      }
    )
  );

  @Effect()
  getUnit$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.GET_UNITS),
    map((action: PropertiesActions.GetUnits) => action.payload),
    switchMap(
      (propertyId: Number): Observable<PropertiesActions.SetUnits> => {
        return this.propertiesService.getUnits(propertyId).pipe(
          map((units: Unit[]) => {
            return new PropertiesActions.SetUnits([units]);
          })
        );
      }
    )
  );

  constructor(
    private actions$: Actions,
    private propertiesService: PropertiesService
  ) {}
}
