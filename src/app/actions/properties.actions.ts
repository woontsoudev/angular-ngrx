import { Action } from '@ngrx/store';

import { dropDownOptions } from '../mocks/components';

export const ADD_PROPERTIES = '[Properties] add';
export const SELECT_PROPERTY = '[Properties] select';

export class AddProperties implements Action {
  readonly type = ADD_PROPERTIES;
  readonly payload = dropDownOptions;
}

export class SelectProperty implements Action {
  readonly type = SELECT_PROPERTY;

  constructor(public payload: object) {}
}

export type All = AddProperties | SelectProperty;
