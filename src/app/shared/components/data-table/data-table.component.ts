import { Component, OnInit } from '@angular/core';

export interface Car {
  vin;
  year;
  brand;
  color;
}

const data = [
  { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
  { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
  { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
  { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
  { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34' },
  { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj' },
  { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr' },
  { brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34' },
  { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5' },
  { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s' }
];

@Component({
  selector: 'app-data-table',
  templateUrl: 'data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  cars: Car[] = data;

  cols: any[];
  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }
}
