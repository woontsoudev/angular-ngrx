import * as counter from '../reducers/counter.reducer';
import * as layout from '../reducers/layout.reducer';

export interface State {
  counterStore: counter.State;
  layoutStore: layout.State;
}

export const reducers = {
  counterStore: counter.reducer,
  layoutStore: layout.reducer
};
