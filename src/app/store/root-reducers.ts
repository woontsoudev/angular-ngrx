import * as counter from '../reducers/counter.reducer';
import * as layout from '../reducers/layout.reducer';
import * as properties from '../reducers/properties.reducer';
import * as carsDemo from '../reducers/cars-demo.reducer';
import * as users from '../reducers/users.reducer';

export interface State {
  counterStore: counter.State;
  layoutStore: layout.State;
  propertiesStore: properties.State;
  carsDemoStore: carsDemo.State;
  usersStore: users.State;
}

export const reducers = {
  counterStore: counter.reducer,
  layoutStore: layout.reducer,
  propertiesStore: properties.reducer,
  carsDemoStore: carsDemo.reducer,
  usersStore: users.reducer
};
