import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  public usersApi = 'users-api';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${environment.api}/${this.usersApi}/users`);
  }

  updateUser(user: User) {
    return this.http.put(
      `${environment.api}/${this.usersApi}/user/${user.id}`,
      user
    );
  }

  addUser(user: User) {
    return this.http.post(`${environment.api}/${this.usersApi}/user`, user);
  }

  deleteUser(user: User) {
    return this.http.delete(
      `${environment.api}/${this.usersApi}/user/${user.id}`
    );
  }
}
