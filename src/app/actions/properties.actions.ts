import { Action } from '@ngrx/store';

export const GET_PROPERTIES = '[Properties] get';
export const SET_PROPERTIES = '[Properties] set';
export const SET_PROPERTY = '[Properties] set property';
export const EDIT_PROPERTY = '[Properties] edit property';
export const SET_EDITING_PROPERTY = '[Properties] set editing property';
export const GET_UNITS = '[Properties/Units] get units';
export const SET_UNITS = '[Properties/Units] set units';

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

export class EditProperty implements Action {
  readonly type = EDIT_PROPERTY;
  constructor(public payload: any) {}
}

export class SetEditingProperty implements Action {
  readonly type = SET_EDITING_PROPERTY;
  constructor(public payload: any) {}
}

// Units

export class GetUnits implements Action {
  readonly type = GET_UNITS;
  constructor(public payload: any) {}
}

export class SetUnits implements Action {
  readonly type = SET_UNITS;
  constructor(public payload: any) {}
}

export type All =
  | GetProperties
  | SetProperties
  | SetProperty
  | EditProperty
  | GetUnits
  | SetUnits;
