import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PropertiesService {
  constructor(private http: HttpClient) {}

  getProperties() {
    return this.http.get(`${environment.API}/properties`);
  }

  getUnits(propertyId) {
    return this.http.get(`${environment.API}/units/${propertyId}`);
  }
}
