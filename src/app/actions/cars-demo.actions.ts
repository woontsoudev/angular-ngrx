import { Action } from '@ngrx/store';

export const GET_CARS = '[CARSDEMO] get';
export const ADD_CAR = '[CARSDEMO] add';
export const SET_CARS = '[CARSDEMO] set';
export const EDIT_CAR = '[CARSDEMO] edit';
export const SET_EDITING_CAR = '[CARSDEMO] set editing';
export const UPDATE_CAR = '[CARSDEMO] update';
export const SAVE_CAR = '[CARSDEMO] save';
export const CREATE_CAR = '[CARSDEMO] create';
export const DELETE_CAR = '[CARSDEMO] delete';
export const REMOVE_CAR = '[CARSDEMO] remove';

export class GetCars implements Action {
  readonly type = GET_CARS;
}

export class SetCars implements Action {
  readonly type = SET_CARS;
  constructor(public payload: any) {}
}

export class AddCar implements Action {
  readonly type = ADD_CAR;
  constructor(public payload: any) {}
}

export class CreateCar implements Action {
  readonly type = CREATE_CAR;
}

export class SaveCar implements Action {
  readonly type = SAVE_CAR;
  constructor(public payload: any) {}
}

export class UpdateCar implements Action {
  readonly type = UPDATE_CAR;
  constructor(public payload: any) {}
}

export class EditCar implements Action {
  readonly type = EDIT_CAR;
  constructor(public payload: any) {}
}

export class SetEditingCar implements Action {
  readonly type = SET_EDITING_CAR;
  constructor(public payload: any) {}
}

export class DeleteCar implements Action {
  readonly type = DELETE_CAR;
  constructor(public payload: any) {}
}

export class RemoveCar implements Action {
  readonly type = REMOVE_CAR;
  constructor(public payload: any) {}
}

export type All =
  | GetCars
  | AddCar
  | SetCars
  | EditCar
  | SetEditingCar
  | UpdateCar
  | SaveCar
  | DeleteCar
  | RemoveCar;
