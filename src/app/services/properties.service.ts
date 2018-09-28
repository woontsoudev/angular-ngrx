import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PropertiesService {
  constructor(private http: HttpClient) {}

  getProperties() {
    return this.http.get(`${environment.propertiesApi}/properties`);
  }

  getUnits(propertyId) {
    return this.http.get(
      `${environment.propertiesApi}/api/properties/${propertyId}/units`
    );
  }

  updateUnit(unit) {
    return this.http.put(`${environment.propertiesApi}/units/${unit.id}`, unit);
  }

  addUnit(unit) {
    return this.http.post(`${environment.propertiesApi}/units`, unit);
  }

  deleteUnit(id) {
    return this.http.delete(`${environment.propertiesApi}/api/unit/${id}`);
  }
}
