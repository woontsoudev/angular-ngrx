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
}
