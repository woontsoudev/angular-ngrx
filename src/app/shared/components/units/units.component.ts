import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Unit } from '../../../models/unit.model';

import * as PropertiesActions from '../../../actions/properties.actions';
import * as PropertiesReducer from '../../../reducers/properties.reducer';

@Component({
  selector: 'app-units',
  templateUrl: 'units.component.html'
})
export class UnitsComponent implements OnInit, OnChanges {
  @Input()
  selectedProperty: object;

  public units$: Observable<Unit[]>;
  // public selectedProperty$: Observable<Units[]>;

  public cols = [
    { field: 'name', header: 'Name' },
    { field: 'unitId', header: 'Unit' },
    { field: 'leaseTo', header: 'Lease To' }
  ];

  constructor(private propertiesStore: Store<PropertiesReducer.State>) {
    this.units$ = propertiesStore.select(
      (state: any) => state.propertiesStore.units
    );
  }

  ngOnInit() {
    // this.propertiesStore.dispatch(new PropertiesActions.GetUnits());
  }

  onRowSelectUnit(car) {
    // this.carsDemoStore.dispatch(new CarsDemoActions.EditCar(car.id));
  }

  onAddUnit() {
    // this.carsDemoStore.dispatch(new CarsDemoActions.CreateCar());
  }

  onRowDeleteUnit(car) {
    // this.confirmationService.confirm({
    //   message: `Do you want to delete ${car.brand}?`,
    //   accept: () => {
    //     this.carsDemoStore.dispatch(new CarsDemoActions.DeleteCar(car));
    //   }
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    // const propertyId = changes.property.currentValue.id;

    console.log('changes:::', changes);

    if (
      changes.selectedProperty.currentValue &&
      changes.selectedProperty.currentValue.hasOwnProperty('id')
    ) {
      this.propertiesStore.dispatch(
        new PropertiesActions.GetUnits(changes.selectedProperty.currentValue.id)
      );
    }
  }
}
