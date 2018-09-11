import { Action } from '@ngrx/store';

export const GET_CARS = '[CARSDEMO] get';
export const ADD_CAR = '[CARSDEMO] add';
export const SET_CARS = '[CARSDEMO] set';

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

export type All = GetCars | AddCar | SetCars;
