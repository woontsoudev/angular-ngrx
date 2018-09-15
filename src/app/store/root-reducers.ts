import * as counter from '../reducers/counter.reducer';
import * as layout from '../reducers/layout.reducer';
import * as properties from '../reducers/properties.reducer';

export interface State {
  counterStore: counter.State;
  layoutStore: layout.State;
  propertiesStore: properties.State;
}

export const reducers = {
  counterStore: counter.reducer,
  layoutStore: layout.reducer,
  propertiesStore: properties.reducer
};
