import * as counter from '../reducers/counter.reducer';

export interface State {
  counterStore: counter.State;
}

export const reducers = {
  counterStore: counter.reducer
};
