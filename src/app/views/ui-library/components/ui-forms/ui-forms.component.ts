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
  public nameField = new FormControl('');
  public profileForm = this.fb.group({
    name: ['', Validators.required],
    username: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(8)]
    ],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['']
    })
  });
  public filteredCountriesMultiple: any[];
  public countries: any[];
  public countriesList: any[];
  public cities: any[];
  public selectedCity: any;
  public date1: Date;

  constructor(private fb: FormBuilder) {
    this.countriesList = COUNTRIES;
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
    this.nameField.setValue('Billy');
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
      name: 'Mandy',
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

  get name(): any {
    return this.profileForm.get('name');
  }

  get username(): any {
    return this.profileForm.get('username');
  }

  get street(): any {
    return this.profileForm.get('address').get('street');
  }

  get city(): any {
    return this.profileForm.get('address').get('city');
  }

  get country(): any {
    return this.profileForm.get('address').get('country');
  }
}
