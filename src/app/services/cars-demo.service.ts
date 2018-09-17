import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class CarsDemoService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get(`${environment.API}/cars`);
  }

  updateCar(car) {
    return this.http.put(`${environment.API}/cars/${car.id}`, car);
  }

  addCar(car) {
    return this.http.post(`${environment.API}/cars`, car);
  }
}
