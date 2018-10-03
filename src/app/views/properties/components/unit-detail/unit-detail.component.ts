import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PropertiesActions from '../../../../actions/properties.actions';
import * as PropertiesReducer from '../../../../reducers/properties.reducer';
import Unit from '../../../../models/unit.model';
import Policy from '../../../../models/policy.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unit-detail',
  templateUrl: 'unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit, OnDestroy {
  public selectedUnit$: Observable<Unit>;
  public selectedProperty$: Observable<Unit>;
  public selectedProperty: any;

  constructor(private propertiesStore: Store<PropertiesReducer.State>) {
    this.selectedUnit$ = propertiesStore.select(
      (state: any) => state.propertiesStore.selectedUnit
    );

    this.selectedProperty$ = propertiesStore.select(
      (state: any) => state.propertiesStore.selectedProperty
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.propertiesStore.dispatch(new PropertiesActions.SetSelectedUnit(null));
  }

  editUnit() {
    this.propertiesStore.dispatch(new PropertiesActions.EditUnit(null));
  }
}
