import { Action } from '@ngrx/store';

import { User } from '../models/user.model';

export const GET_USERS = '[USERS] get';
export const ADD_USER = '[USERS] add';
export const SET_USERS = '[USERS] set';
export const EDIT_USER = '[USERS] edit';
export const SET_EDITING_USER = '[USERS] set editing';
export const UPDATE_USER = '[USERS] update';
export const SAVE_USER = '[USERS] save';
export const CREATE_USER = '[USERS] create';
export const DELETE_USER = '[USERS] delete';
export const REMOVE_USER = '[USERS] remove';

export class GetUsers implements Action {
  readonly type = GET_USERS;
}

export class SetUsers implements Action {
  readonly type = SET_USERS;
  constructor(public payload: User[]) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) {}
}

export class CreateUser implements Action {
  readonly type = CREATE_USER;
}

export class SaveUser implements Action {
  readonly type = SAVE_USER;
  constructor(public payload: User) {}
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: User) {}
}

export class EditUser implements Action {
  readonly type = EDIT_USER;
  constructor(public payload: User) {}
}

export class SetEditingUser implements Action {
  readonly type = SET_EDITING_USER;
  constructor(public payload: User) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: User) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: User) {}
}

export type All =
  | GetUsers
  | AddUser
  | SetUsers
  | EditUser
  | SetEditingUser
  | UpdateUser
  | SaveUser
  | DeleteUser
  | RemoveUser;
