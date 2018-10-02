import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as UsersActions from 'src/app/actions/users.actions';
import * as UsersReducer from 'src/app/reducers/users.reducer';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: 'edit-user-form.component.html'
})
export class EditUserFormComponent implements OnInit {
  public editUserForm = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
    id: ['']
  });
  public editingUser$: Observable<any>;
  public editMode = false;

  constructor(
    private fb: FormBuilder,
    private usersStore: Store<UsersReducer.State>
  ) {
    this.editingUser$ = usersStore.select(
      (state: any) => state.usersStore.editingUser
    );
  }

  ngOnInit() {
    this.editingUser$.subscribe(data => {
      if (data.id) {
        const {
          addressLine2,
          email,
          addressLine1,
          phone,
          id,
          role,
          password,
          firstName,
          lastName
        } = data;

        this.editUserForm.patchValue({
          email,
          addressLine1,
          addressLine2,
          phone,
          id,
          password,
          firstName,
          lastName,
          role: role.name
        });

        this.editMode = true;
      }
    });
  }

  onSubmit() {
    const user = this.editUserForm.value;
    user.role = {
      id: 1,
      name: this.editUserForm.value.role
    };
    if (this.editMode) {
      this.usersStore.dispatch(new UsersActions.UpdateUser(user));
    } else {
      delete user.id;
      this.usersStore.dispatch(new UsersActions.AddUser(user));
    }
    // this.editMode
    //   ? this.usersStore.dispatch(new UsersActions.UpdateUser(user))
    //   : this.usersStore.dispatch(new UsersActions.AddUser(user));
  }

  get username() {
    return this.editUserForm.get('username');
  }

  get email() {
    return this.editUserForm.get('email');
  }

  get addressLine1() {
    return this.editUserForm.get('addressLine1');
  }

  get addressLine2() {
    return this.editUserForm.get('addressLine2');
  }

  get phone() {
    return this.editUserForm.get('phone');
  }

  get firstName() {
    return this.editUserForm.get('firstName');
  }

  get lastName() {
    return this.editUserForm.get('lastName');
  }

  get password() {
    return this.editUserForm.get('password');
  }
}
