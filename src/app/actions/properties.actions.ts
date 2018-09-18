import { Action } from '@ngrx/store';

export const GET_PROPERTIES = '[Properties] get';
export const SET_PROPERTIES = '[Properties] set';
export const SELECT_PROPERTY = '[Properties] select property';
export const SET_PROPERTY = '[Properties] set property';

export class GetProperties implements Action {
  readonly type = GET_PROPERTIES;
}

export class SetProperties implements Action {
  readonly type = SET_PROPERTIES;
  constructor(public payload: any) {}
}

export class SetProperty implements Action {
  readonly type = SET_PROPERTY;
  constructor(public payload: object) {}
}

export type All = GetProperties | SetProperties | SetProperty;
