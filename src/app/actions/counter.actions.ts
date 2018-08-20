import { Action } from '@ngrx/store';

export const INCREMENT_COUNTER = '[Counter] increment';
export const DECREMENT_COUNTER = '[Counter] decrement';

export class IncrementCounter implements Action {
  readonly type = INCREMENT_COUNTER;
}

export class DecrementCounter implements Action {
  readonly type = DECREMENT_COUNTER;
}

export type All = IncrementCounter | DecrementCounter;
