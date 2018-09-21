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
    username: ['', Validators.required],
    email: ['', Validators.required],
    addressLine1: ['', Validators.required],
    phone: ['', Validators.required],
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
        const { username, email, addressLine1, phone, id } = data;

        this.editUserForm.patchValue({
          username,
          email,
          addressLine1,
          phone,
          id
        });

        this.editMode = true;
      }
    });
  }

  onSubmit() {
    this.editMode
      ? this.usersStore.dispatch(
          new UsersActions.UpdateUser(this.editUserForm.value)
        )
      : this.usersStore.dispatch(
          new UsersActions.AddUser(this.editUserForm.value)
        );
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

  get phone() {
    return this.editUserForm.get('phone');
  }
}
