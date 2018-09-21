import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${environment.API}/users`);
  }

  updateUser(user: User) {
    return this.http.put(`${environment.API}/users/${user.id}`, user);
  }

  addUser(user: User) {
    return this.http.post(`${environment.API}/users`, user);
  }

  deleteUser(user: User) {
    return this.http.delete(`${environment.API}/users/${user.id}`);
  }
}
