import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';

import * as UsersActions from 'src/app/actions/users.actions';
import * as UsersReducer from 'src/app/reducers/users.reducer';
import { User, Role } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  public cols = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'roleName', header: 'Role' },
    { field: 'phone', header: 'Phone' }
  ];
  public $users: Observable<any[]>;

  constructor(
    private usersStore: Store<UsersReducer.State>,
    private confirmationService: ConfirmationService
  ) {
    this.$users = usersStore.select((state: any) => {
      const users = state.usersStore.users.map((user: User) => {
        user.name = `${user.firstName} ${user.lastName}`;
        user.roleName = `${user.role.name}`;
        return user;
      });
      return users;
    });
  }

  ngOnInit() {
    this.usersStore.dispatch(new UsersActions.GetUsers());
  }

  onRowSelect(user: User) {
    this.usersStore.dispatch(new UsersActions.EditUser(user));
  }

  onRowDelete(user: User) {
    this.confirmationService.confirm({
      message: `Do you want to delete ${user.username}?`,
      accept: () => {
        this.usersStore.dispatch(new UsersActions.DeleteUser(user));
      }
    });
  }

  onAddUser() {
    this.usersStore.dispatch(new UsersActions.CreateUser());
  }
}
