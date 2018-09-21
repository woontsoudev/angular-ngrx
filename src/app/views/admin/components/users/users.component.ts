import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';

import * as UsersActions from 'src/app/actions/users.actions';
import * as UsersReducer from 'src/app/reducers/users.reducer';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  public cols = [
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' },
    { field: 'addressLine1', header: 'Address 1' },
    { field: 'phone', header: 'Phone' }
  ];
  public $users: Observable<any[]>;

  constructor(
    private usersStore: Store<UsersReducer.State>,
    private confirmationService: ConfirmationService
  ) {
    this.$users = usersStore.select((state: any) => state.usersStore.users);
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
    console.log();
  }
}
