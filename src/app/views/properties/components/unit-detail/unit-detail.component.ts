import { Component, OnInit } from '@angular/core';
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
export class UnitDetailComponent implements OnInit {
  public selectedUnit$: Observable<Unit>;
  public selectedProperty$: Observable<Unit>;
  public selectedProperty: any;

  policies: Policy[];

  constructor(private propertiesStore: Store<PropertiesReducer.State>) {
    this.selectedUnit$ = propertiesStore.select(
      (state: any) => state.propertiesStore.selectedUnit
    );

    this.selectedProperty$ = propertiesStore.select(
      (state: any) => state.propertiesStore.selectedProperty
    );
  }

  ngOnInit() {
    this.selectedUnit$.subscribe((unit: any) => {
      this.policies = unit.policies;
    });
  }

  editUnit() {
    this.propertiesStore.dispatch(new PropertiesActions.EditUnit(null));
  }
}
