import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as PropertiesActions from '../../../../actions/properties.actions';
import * as PropertiesReducer from '../../../../reducers/properties.reducer';
import { Unit } from '../../../../models/unit.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-units',
  templateUrl: 'add-edit-units.component.html'
})
export class AddEditComponent implements OnInit {
  public editingUnit$: Observable<Unit>;
  public addEditForm = this.fb.group({
    id: [''],
    unit: ['', Validators.required],
    unitType: ['', Validators.required],
    residentName: ['', Validators.required],
    leaseDuration: ['', Validators.required],
    policyProvider: [''],
    policyDuration: ['', Validators.required],
    primaryPolicyHolder: ['', Validators.required],
    email: ['', Validators.required],

    policyFile: this.fb.group({
      file: [''],
      residentName: [''],
      email: [''],
      residentCovered: ['']
    })
  });

  public primaryPolicyHolders: any[];
  public editMode = false;
  uploadedFiles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private propertiesStore: Store<PropertiesReducer.State>
  ) {
    this.primaryPolicyHolders = [
      { name: 'Holder 1', value: 'holder1' },
      { name: 'Holder 2', value: 'holder2' },
      { name: 'Holder 3', value: 'holder3' },
      { name: 'Holder 4', value: 'holder4' },
      { name: 'Holder 5', value: 'holder5' }
    ];

    this.editingUnit$ = propertiesStore.select(
      (state: any) => state.propertiesStore.editingUnit
    );
  }

  ngOnInit() {
    this.editingUnit$.subscribe(data => {
      console.log('data::::', data);

      if (data.unitId) {
        const { id, unitId: unit, name: residentName, type: unitType } = data;
        const primaryPolicyHolder = { name: 'Holder 4', value: 'holder4' };

        const email = 'email@email.com';
        const leaseDuration = new Date(data.leaseFrom);
        const policyDuration = new Date(data.policyEnd);
        const policyFile = this.addEditForm.get('policyFile');
        policyFile.patchValue({
          file: '',
          residentName: '',
          email: '',
          residentCovered: ''
        });

        this.addEditForm.patchValue({
          id,
          unit,
          residentName,
          unitType,
          leaseDuration,
          policyDuration,
          primaryPolicyHolder,
          email,
          policyFile
        });

        console.log('this.addEditForm:::', this.addEditForm);
      }
    });
  }

  onSubmitWithFb() {
    console.log('On submit:::', this.addEditForm);

    // this.editMode
    //   ? this.propertiesStore.dispatch(
    //       new PropertiesActions.UpdateCar(this.addEditForm.value)
    //     )
    //   : this.propertiesStore.dispatch(
    //       new PropertiesActions.AddCar(this.addEditForm.value)
    //     );
  }

  onUpload(event) {
    console.log('File upload: ', event);
  }

  get unit(): any {
    return this.addEditForm.get('unit');
  }

  get unitType(): any {
    return this.addEditForm.get('unitType');
  }

  get residentName(): any {
    return this.addEditForm.get('residentName');
  }

  get leaseDuration(): any {
    return this.addEditForm.get('leaseDuration');
  }

  get policyProvider(): any {
    return this.addEditForm.get('policyProvider');
  }

  get policyDuration(): any {
    return this.addEditForm.get('policyDuration');
  }

  get primaryPolicyHolder(): any {
    return this.addEditForm.get('primaryPolicyHolder');
  }

  get email(): any {
    return this.addEditForm.get('email');
  }
}
