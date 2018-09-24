import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import { Property } from '../../../../models/property.model';

import * as PropertiesActions from '../../../../actions/properties.actions';
import * as PropertiesReducer from '../../../../reducers/properties.reducer';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['../../ui-library.component.scss']
})
export class UiComponentsComponent implements OnInit {
  public dropdownProperties$: Observable<Property[]>;

  constructor(private propertiesStore: Store<PropertiesReducer.State>) {
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
  }

  ngOnInit() {
    this.propertiesStore.dispatch(new PropertiesActions.GetProperties());
  }

  onSelectedItem(item) {
    this.propertiesStore.dispatch(new PropertiesActions.SetProperty(item));
  }
}
