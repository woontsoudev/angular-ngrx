import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as CarsDemoActions from '../../../../actions/cars-demo.actions';
import * as CarsDemoReducer from '../../../../reducers/cars-demo.reducer';
import * as LayoutReducer from '../../../../reducers/layout.reducer';
import * as LayoutActions from '../../../../actions/layout.actions';

@Component({
  selector: 'app-ui-tables',
  templateUrl: 'ui-tables.component.html'
})
export class UiTablesComponent implements OnInit {
  public cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];

  public $cars: Observable<any[]>;

  constructor(
    private carsDemoStore: Store<CarsDemoReducer.State>,
    private layoutStore: Store<LayoutReducer.State>
  ) {
    this.$cars = carsDemoStore.select((state: any) => state.carsDemoStore.cars);
  }

  ngOnInit() {
    this.carsDemoStore.dispatch(new CarsDemoActions.GetCars());
  }

  onRowSelect(car) {
    this.carsDemoStore.dispatch(new CarsDemoActions.EditCar(car.id));
  }

  onAddCar() {
    this.carsDemoStore.dispatch(new CarsDemoActions.CreateCar());
  }
}
