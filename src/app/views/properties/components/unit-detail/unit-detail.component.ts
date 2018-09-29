import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PropertiesActions from '../../../../actions/properties.actions';
import * as PropertiesReducer from '../../../../reducers/properties.reducer';
import Unit from '../../../../models/unit.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unit-detail',
  templateUrl: 'unit-detail.component.html'
})
export class UnitDetailComponent implements OnInit {
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

  editUnit() {
    this.propertiesStore.dispatch(new PropertiesActions.EditUnit(null));
  }
}
