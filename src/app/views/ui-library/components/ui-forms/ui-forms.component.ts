import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { COUNTRIES } from './COUNTRIES';

@Component({
  selector: 'app-ui-forms',
  templateUrl: 'ui-forms.component.html',
  styleUrls: ['../../ui-library.component.scss']
})
export class UiFormsComponent implements OnInit {
  public name = new FormControl('');
  public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  public filteredCountriesMultiple: any[];
  public countries: any[];
  public cities: any[];
  public selectedCity: any;
  public date1: Date;

  constructor(private fb: FormBuilder) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

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
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Mandy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  filterCountryMultiple(event) {
    const query = event.query;
    console.log(query);
    this.filteredCountriesMultiple = this.filterCountry(query, COUNTRIES);
  }

  filterCountry(query, countries: any[]): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }

  get firstName(): any {
    console.log(this.profileForm.get('firstName'));
    return this.profileForm.get('firstName');
  }
}
