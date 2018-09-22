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
  public editingData = {};
  public uploadedFiles: any[] = [];

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
      this.editingData = data;

      if (data.unitId) {
        const { id, unitId: unit, name: residentName, type: unitType } = data;
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
          leaseDuration: [new Date(data.leaseFrom), new Date(data.leaseTo)],
          policyDuration: new Date(data.policyEnd),
          primaryPolicyHolder: { name: 'Holder 4', value: 'holder4' },
          email: 'email@email.com',
          policyFile
        });

        console.log('this.addEditForm:::', this.addEditForm);

        this.editMode = true;
      }
    });
  }

  onSubmitWithFb() {
    console.log('this.addEditForm.value:::', this.addEditForm.value);

    const values = Object.assign({}, this.editingData, {
      name: this.addEditForm.value.residentName,
      leaseFrom: this.addEditForm.value.leaseDuration[0],
      leaseTo: this.addEditForm.value.leaseDuration[1],
      policyEnd: this.addEditForm.value.policyDuration,
      type: this.addEditForm.value.unitType,
      email: this.addEditForm.value.email,
      primaryPolicyHolder: this.addEditForm.value.primaryPolicyHolder.value
    });

    this.editMode
      ? this.propertiesStore.dispatch(new PropertiesActions.UpdateUnit(values))
      : this.propertiesStore.dispatch(
          new PropertiesActions.AddUnit(this.addEditForm.value)
        );
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
