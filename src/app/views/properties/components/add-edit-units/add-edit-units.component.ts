import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as PropertiesActions from '../../../../actions/properties.actions';
import * as PropertiesReducer from '../../../../reducers/properties.reducer';
import Unit from '../../../../models/unit.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-units',
  templateUrl: 'add-edit-units.component.html'
})
export class AddEditComponent implements OnInit {
  public editingUnit$: Observable<Unit>;
  public selectedProperty$: Observable<Unit>;
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
  public selectedProperty: any;
  public uploadedFiles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private propertiesStore: Store<PropertiesReducer.State>
  ) {
    this.primaryPolicyHolders = [
      { name: 'Holder 1', value: 'Holder 1' },
      { name: 'Holder 2', value: 'Holder 2' },
      { name: 'Holder 3', value: 'Holder 3' },
      { name: 'Holder 4', value: 'Holder 4' },
      { name: 'Holder 5', value: 'Holder 5' }
    ];

    this.editingUnit$ = propertiesStore.select(
      (state: any) => state.propertiesStore.editingUnit
    );

    this.selectedProperty$ = propertiesStore.select(
      (state: any) => state.propertiesStore.selectedProperty
    );
  }

  ngOnInit() {
    this.selectedProperty$.subscribe(property => {
      this.selectedProperty = property;
    });
    this.editingUnit$.subscribe(data => {
      this.editingData = data;

      if (data) {
        const {
          id,
          unitId: unit = `00${data.id}`, // Remove this mocked unitId when real endpoints are ready
          name: residentName,
          type: unitType
        } = data;
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
          primaryPolicyHolder: {
            name: data.primaryPolicyHolder,
            value: data.primaryPolicyHolder
          },
          email: 'email@email.com',
          policyFile
        });

        this.editMode = true;
      }
    });
  }

  onSubmitWithFb() {
    const values = Object.assign({}, this.editingData, {
      name: this.addEditForm.get('residentName').value,
      leaseFrom: this.addEditForm.get('leaseDuration').value[0],
      leaseTo: this.addEditForm.get('leaseDuration').value[1],
      policyEnd: this.addEditForm.get('policyDuration').value,
      type: this.addEditForm.get('unitType').value,
      email: this.addEditForm.get('email').value,
      primaryPolicyHolder: this.addEditForm.get('primaryPolicyHolder').value
        .value,
      propertyId: this.selectedProperty.id
    });

    this.editMode
      ? this.propertiesStore.dispatch(new PropertiesActions.UpdateUnit(values))
      : this.propertiesStore.dispatch(new PropertiesActions.AddUnit(values));
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
