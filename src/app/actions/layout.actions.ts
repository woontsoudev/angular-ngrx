import { Action } from '@ngrx/store';

export const TOGGLE_MODAL_EXAMPLE = '[Modal] toggle example';
export const TOGGLE_CARSDEMO_MODAL = '[Modal] toggle carsdemo';
export const TOGGLE_LOADER = '[Loader] toggle';

export class ToggleModalExample implements Action {
  readonly type = TOGGLE_MODAL_EXAMPLE;
}

export class ToggleCarsDemoModal implements Action {
  readonly type = TOGGLE_CARSDEMO_MODAL;
}

export class ToggleLoader implements Action {
  readonly type = TOGGLE_LOADER;
}

export type All = ToggleModalExample | ToggleCarsDemoModal | ToggleLoader;
