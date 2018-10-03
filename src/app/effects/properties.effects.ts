import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

import { PropertiesService } from '../services/properties.service';
import { UnitsService } from '../services/units.service';

// Actions
import * as PropertiesActions from '../actions/properties.actions';
import * as LayoutActions from '../actions/layout.actions';

// Models
import Property from '../models/property.model';
import Unit from '../models/unit.model';

@Injectable()
export class PropertiesEffects {
  @Effect()
  getProperties$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.GET_PROPERTIES),
    map((action: PropertiesActions.SetProperties) => action.payload),
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

  /**
   * Set default selected property right after getting properties
   */
  @Effect()
  setDefaultProperty$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.SET_PROPERTIES),
    map((action: PropertiesActions.SelectProperty) => action.payload),
    switchMap(
      (properties): Action[] => {
        return [new PropertiesActions.SelectProperty(properties[0])];
      }
    )
  );

  @Effect()
  selectProperty: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.SELECT_PROPERTY),
    map((action: PropertiesActions.SelectProperty) => action.payload),
    switchMap(
      (property: Property): Action[] => {
        return [
          new PropertiesActions.SetProperty(property),
          new PropertiesActions.SetUnits(property.units)
        ];
      }
    )
  );

  @Effect()
  editUnit$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.EDIT_UNIT),
    map((action: PropertiesActions.EditUnit) => action.payload),
    switchMap(
      (unit): Action[] => {
        return [
          new LayoutActions.ToggleEditUnitModal()
          // new PropertiesActions.SetSelectedUnit(unit)
        ];
      }
    )
  );

  @Effect()
  selectUnit$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.SELECT_UNIT),
    map((action: PropertiesActions.SelectUnit) => action.payload),
    switchMap(
      (unit): Action[] => {
        return [
          new LayoutActions.ToggleUnitDetailModal(),
          new PropertiesActions.SetSelectedUnit(unit)
        ];
      }
    )
  );

  @Effect()
  updateUnit$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.UPDATE_UNIT),
    map((action: PropertiesActions.UpdateUnit) => action.payload),
    switchMap(
      (params): Observable<{}> => {
        return this.unitsService
          .updateUnit(params.propertyId, params.unit)
          .pipe(
            map((res: Unit) => {
              this.messageService.add({
                severity: 'success',
                summary: 'Done',
                detail: `${res.name} was edited`
              });
              return res;
            })
          );
      }
    ),
    switchMap(
      (unit): Action[] => {
        return [
          new PropertiesActions.SaveUnit(unit),
          new LayoutActions.ToggleEditUnitModal()
          // new PropertiesActions.SetSelectedUnit(null)
        ];
      }
    )
  );

  @Effect()
  createUnit$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.CREATE_UNIT),
    switchMap(
      (): Action[] => {
        return [
          new LayoutActions.ToggleEditUnitModal(),
          new PropertiesActions.SetSelectedUnit(null)
        ];
      }
    )
  );

  @Effect()
  addUnit$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.ADD_UNIT),
    map((action: PropertiesActions.AddUnit) => action.payload),
    switchMap(
      (params): Observable<{}> => {
        return this.unitsService.addUnit(params.propertyId, params.unit).pipe(
          map((res: Unit) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Done',
              detail: `${res.name} was added`
            });
            return res;
          })
        );
      }
    ),
    switchMap(
      (data): Action[] => {
        return [
          new PropertiesActions.SaveUnit(data),
          new LayoutActions.ToggleEditUnitModal()
        ];
      }
    )
  );

  @Effect()
  deleteUnit$: Observable<Action> = this.actions$.pipe(
    ofType(PropertiesActions.DELETE_UNIT),
    map((action: PropertiesActions.DeleteUnit) => action.payload),
    switchMap(params => {
      return this.unitsService
        .deleteUnit(params.propertyId, params.unit.id)
        .pipe(
          map(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Done',
              detail: `${params.unit.name} was successfully deleted`
            });
            return params.unit;
          })
        );
    }),
    switchMap(
      (unit: Unit): Action[] => {
        return [new PropertiesActions.RemoveUnit(unit.id)];
      }
    )
  );

  constructor(
    private actions$: Actions,
    private propertiesService: PropertiesService,
    private unitsService: UnitsService,
    private messageService: MessageService
  ) {}
}
