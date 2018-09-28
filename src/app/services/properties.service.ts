import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PropertiesService {
  constructor(private http: HttpClient) {}

  getProperties() {
    return this.http.get(`${environment.api}/properties`);
  }

  getUnits(propertyId) {
    return this.http.get(
      `${environment.api}/api/properties/${propertyId}/units`
    );
  }

  updateUnit(unit) {
    return this.http.put(`${environment.api}/units/${unit.id}`, unit);
  }

  addUnit(unit) {
    return this.http.post(`${environment.api}/units`, unit);
  }

  deleteUnit(id) {
    return this.http.delete(`${environment.api}/api/unit/${id}`);
  }
}
