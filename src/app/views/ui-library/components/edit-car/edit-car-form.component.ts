import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as CarsDemoActions from 'src/app/actions/cars-demo.actions';
import * as CarsDemoReducer from '../../../../reducers/cars-demo.reducer';

@Component({
  selector: 'app-edit-car-form',
  templateUrl: 'edit-car-form.component.html'
})
export class EditCarFormComponent implements OnInit {
  public editCarForm = this.fb.group({
    brand: ['', Validators.required],
    color: ['', Validators.required],
    vin: ['', Validators.required],
    year: ['', Validators.required],
    id: ['']
  });
  public editingCar$: Observable<any>;
  public editMode = false;

  constructor(
    private fb: FormBuilder,
    private carsDemoStore: Store<CarsDemoReducer.State>
  ) {
    this.editingCar$ = carsDemoStore.select(
      (state: any) => state.carsDemoStore.editingCar
    );
  }

  ngOnInit() {
    this.editingCar$.subscribe(data => {
      if (data.id) {
        const { brand, year, color, vin, id } = data;

        this.editCarForm.patchValue({
          brand,
          year,
          color,
          vin,
          id
        });

        this.editMode = true;
      }
    });
  }

  onSubmitWithFb() {
    this.editMode
      ? this.carsDemoStore.dispatch(
          new CarsDemoActions.UpdateCar(this.editCarForm.value)
        )
      : this.carsDemoStore.dispatch(
          new CarsDemoActions.AddCar(this.editCarForm.value)
        );
  }

  get brand(): any {
    return this.editCarForm.get('brand');
  }

  get color(): any {
    return this.editCarForm.get('color');
  }

  get vin(): any {
    return this.editCarForm.get('vin');
  }

  get year(): any {
    return this.editCarForm.get('year');
  }
}
