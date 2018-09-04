import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-ui-forms',
  templateUrl: 'ui-forms.component.html'
})
export class UiFormsComponent implements OnInit {
  public name = new FormControl('');
  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  public profileFormWithFb = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  updateName() {
    this.name.setValue('Billy');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onSubmitWithFb() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileFormWithFb.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Mandy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get firstName(): AbstractControl {
    return this.profileFormWithFb.get('firstName');
  }
}
