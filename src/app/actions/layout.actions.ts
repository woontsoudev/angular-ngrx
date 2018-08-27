import { Action } from '@ngrx/store';

export const TOGGLE_MODAL_EXAMPLE = '[Modal] toggle example';

export class ToggleModalExample implements Action {
  readonly type = TOGGLE_MODAL_EXAMPLE;
}

export type All = ToggleModalExample;
