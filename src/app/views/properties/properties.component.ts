import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import { Property } from '../../models/property.model';
import { Unit } from '../../models/unit.model';

import * as PropertiesActions from '../../actions/properties.actions';
import * as PropertiesReducer from '../../reducers/properties.reducer';

@Component({
  selector: 'app-properties',
  templateUrl: 'properties.component.html'
})
export class PropertiesComponent implements OnInit {
  public properties$: Observable<Property[]>;
  public units$: Observable<Unit[]>;
  public dropdownProperties$: Observable<Property[]>;
  public selectedProperty$: Observable<Property>;

  constructor(private propertiesStore: Store<PropertiesReducer.State>) {
    this.properties$ = propertiesStore.select(
      (state: any) => state.propertiesStore.properties
    );

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

    this.selectedProperty$ = propertiesStore.select(
      (state: any) => state.propertiesStore.selectedProperty
    );

    this.units$ = propertiesStore.select(
      (state: any) => state.propertiesStore.units
    );
  }

  ngOnInit() {
    this.propertiesStore.dispatch(new PropertiesActions.GetProperties());

    this.selectedProperty$.subscribe(property => {
      if (property.hasOwnProperty('id')) {
        this.propertiesStore.dispatch(new PropertiesActions.GetUnits(property));
      }
    });
  }

  onSelectProperty(item) {
    this.properties$.subscribe(properties => {
      const property = properties.find(p => p.id === item.id);
      this.propertiesStore.dispatch(
        new PropertiesActions.SetProperty(property)
      );
    });
  }
}
