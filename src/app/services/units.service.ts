import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class UnitsService {
  constructor(private http: HttpClient) {}

  getUnits(propertyId) {
    return this.http.get(`${environment.API}/properties/${propertyId}/units`);
  }

  updateUnit(propertyId, unit) {
    return this.http.put(
      `${environment.API}/properties/${propertyId}/units/${unit.id}`,
      unit
    );
  }

  addUnit(propertyId, unit) {
    return this.http.post(
      `${environment.API}/properties/${propertyId}/units`,
      unit
    );
  }

  deleteUnit(propertyId, unitId) {
    return this.http.delete(
      `${environment.API}/properties/${propertyId}/units/${unitId}`
    );
  }
}
