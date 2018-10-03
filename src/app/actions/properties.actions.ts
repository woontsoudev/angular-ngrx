import { Action } from '@ngrx/store';

export const GET_PROPERTIES = '[Properties] get';
export const SET_PROPERTIES = '[Properties] set';
export const SELECT_PROPERTY = '[Properties] select property';
export const SET_PROPERTY = '[Properties] set property';
export const SET_UNITS = '[Properties/Units] set units';
export const EDIT_UNIT = '[Properties/Units] edit unit';
export const SELECT_UNIT = '[Properties/Units] select unit';
export const SET_SELECTED_UNIT = '[Properties/Units] set selected unit';
export const ADD_UNIT = '[Properties/Units] add unit';
export const UPDATE_UNIT = '[Properties/Units] update unit';
export const CREATE_UNIT = '[Properties/Units] create unit';
export const SAVE_UNIT = '[Properties/Units] save unit';
export const DELETE_UNIT = '[Properties/Units] delete unit';
export const REMOVE_UNIT = '[Properties/Units] remove unit';

export class GetProperties implements Action {
  readonly type = GET_PROPERTIES;
}

export class SetProperties implements Action {
  readonly type = SET_PROPERTIES;
  constructor(public payload: any) {}
}

export class SelectProperty implements Action {
  readonly type = SELECT_PROPERTY;
  constructor(public payload: object) {}
}

export class SetProperty implements Action {
  readonly type = SET_PROPERTY;
  constructor(public payload: object) {}
}

// Units

export class SetUnits implements Action {
  readonly type = SET_UNITS;
  constructor(public payload: any) {}
}

export class EditUnit implements Action {
  readonly type = EDIT_UNIT;
  constructor(public payload: any) {}
}

export class SelectUnit implements Action {
  readonly type = SELECT_UNIT;
  constructor(public payload: any) {}
}

export class SetSelectedUnit implements Action {
  readonly type = SET_SELECTED_UNIT;
  constructor(public payload: any) {}
}

export class UpdateUnit implements Action {
  readonly type = UPDATE_UNIT;
  constructor(public payload: any) {}
}

export class CreateUnit implements Action {
  readonly type = CREATE_UNIT;
}

export class AddUnit implements Action {
  readonly type = ADD_UNIT;
  constructor(public payload: any) {}
}

export class SaveUnit implements Action {
  readonly type = SAVE_UNIT;
  constructor(public payload: any) {}
}

export class DeleteUnit implements Action {
  readonly type = DELETE_UNIT;
  constructor(public payload: any) {}
}

export class RemoveUnit implements Action {
  readonly type = REMOVE_UNIT;
  constructor(public payload: any) {}
}

export type All =
  | GetProperties
  | SelectProperty
  | SetProperties
  | SetProperty
  | SetUnits
  | EditUnit
  | SelectUnit
  | SetSelectedUnit
  | UpdateUnit
  | CreateUnit
  | AddUnit
  | SaveUnit
  | DeleteUnit
  | RemoveUnit;
