import { Action } from '@ngrx/store';

export const GET_PROPERTIES = '[Properties] get';
export const SET_PROPERTIES = '[Properties] set';
export const SET_PROPERTY = '[Properties] set property';
export const GET_UNITS = '[Properties/Units] get units';
export const SET_UNITS = '[Properties/Units] set units';
export const EDIT_UNIT = '[Properties/Units] edit unit';
export const SET_EDITING_UNIT = '[Properties/Units] set editing unit';
export const DELETE_UNIT = '[Properties/Units] delete unit';

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

// Units

export class GetUnits implements Action {
  readonly type = GET_UNITS;
  constructor(public payload: any) {}
}

export class SetUnits implements Action {
  readonly type = SET_UNITS;
  constructor(public payload: any) {}
}

export class EditUnit implements Action {
  readonly type = EDIT_UNIT;
  constructor(public payload: any) {}
}

export class SetEditingUnit implements Action {
  readonly type = SET_EDITING_UNIT;
  constructor(public payload: any) {}
}

export class DeleteUnit implements Action {
  readonly type = DELETE_UNIT;
  constructor(public payload: any) {}
}

export type All =
  | GetProperties
  | SetProperties
  | SetProperty
  | GetUnits
  | SetUnits
  | EditUnit
  | SetEditingUnit;
