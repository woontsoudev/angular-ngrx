import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { PropertiesService } from '../services/properties.service';
import * as PropertiesActions from '../actions/properties.actions';
import { Property } from '../models/properties.model';

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
          )
        );
      }
    )
  );

  constructor(
    private actions$: Actions,
    private propertiesService: PropertiesService
  ) {}
}
