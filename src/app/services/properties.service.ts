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
    return this.http.get(
      `${environment.API}/api/properties/${propertyId}/units`
    );
  }

  updateUnit(unit) {
    return this.http.put(`${environment.API}/units/${unit.id}`, unit);
  }

  addUnit(unit) {
    return this.http.post(`${environment.API}/units`, unit);
  }

  deleteUnit(id) {
    return this.http.delete(`${environment.API}/api/unit/${id}`);
  }
}
