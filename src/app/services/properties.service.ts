import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class PropertiesService {
  public propertiesApi = 'properties-api';
  constructor(private http: HttpClient) {}

  getProperties() {
    return this.http.get(
      `${environment.api}/${this.propertiesApi}/properties/users/1`
    );
  }
}
