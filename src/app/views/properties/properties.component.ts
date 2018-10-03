import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import Property from '../../models/property.model';
import Unit from '../../models/unit.model';

import * as PropertiesActions from '../../actions/properties.actions';
import * as PropertiesReducer from '../../reducers/properties.reducer';
import * as LayoutActions from '../../actions/layout.actions';

@Component({
  selector: 'app-properties',
  templateUrl: 'properties.component.html'
})
export class PropertiesComponent implements OnInit {
  public properties$: Observable<Property[]>;
  public units$: Observable<Unit[]>;
  public selectedUnit$: Observable<Unit>;
  public editUnitModal$: Observable<boolean>;
  public unitDetailModal$: Observable<boolean>;
  public dropdownProperties$: Observable<Property[]>;
  public addEditModalTitle = 'ADD UNIT';

  constructor(
    private propertiesStore: Store<PropertiesReducer.State>,
    private layoutStore: Store<PropertiesReducer.State>
  ) {
    // Main properties model
    this.properties$ = propertiesStore.select(
      (state: any) => state.propertiesStore.properties
    );

    // Dropdown properties model
    this.dropdownProperties$ = propertiesStore.select((state: any) =>
      state.propertiesStore.properties.map(property => {
        return {
          label: property.name,
          value: {
            id: property.id,
            location: `${property.address1}, ${property.state}, ${
              property.postalCode
            }`
          }
        };
      })
    );

    // Units model to show in units table
    this.units$ = propertiesStore.select((state: any) =>
      state.propertiesStore.units.map(unit => ({
        ...unit,
        leaseTo: new Date(unit.leaseTo).toLocaleDateString(),
        policyEnd: new Date(unit.policyEnd).toLocaleDateString()
      }))
    );

    this.editUnitModal$ = layoutStore.select(
      (state: any) => state.layoutStore.editUnitModal
    );

    this.unitDetailModal$ = layoutStore.select(
      (state: any) => state.layoutStore.unitDetailModal
    );

    this.selectedUnit$ = propertiesStore.select(
      (state: any) => state.propertiesStore.selectedUnit
    );
  }

  ngOnInit() {
    this.propertiesStore.dispatch(new PropertiesActions.GetProperties());
  }

  onSelectProperty(item) {
    this.properties$.subscribe(properties => {
      const property = properties.find(p => p.id === item.id);
      this.propertiesStore.dispatch(
        new PropertiesActions.SelectProperty(property)
      );
    });
  }

  onToggleModal(modal) {
    switch (modal) {
      case 'DETAIL':
        this.layoutStore.dispatch(new LayoutActions.ToggleUnitDetailModal());
        break;
      case 'EDIT':
        this.layoutStore.dispatch(new LayoutActions.ToggleEditUnitModal());
        break;
      default:
        return null;
    }
  }
}
