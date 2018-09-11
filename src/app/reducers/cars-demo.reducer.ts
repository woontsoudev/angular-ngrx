import * as CarsDemoActions from '../actions/cars-demo.actions';

export interface State {
  cars: any[];
}

const initialState: State = {
  cars: []
};

export function reducer(
  state = initialState,
  action: CarsDemoActions.All
): State {
  switch (action.type) {
    case CarsDemoActions.SET_CARS: {
      return {
        ...state,
        cars: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
