import * as CarsDemoActions from '../actions/cars-demo.actions';

export interface State {
  cars: any[];
  editingCar: any;
}

const initialState: State = {
  cars: [],
  editingCar: {}
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

    case CarsDemoActions.SET_EDITING_CAR: {
      const editingCar =
        action.payload !== ''
          ? state.cars.find(car => car.id === action.payload)
          : {};
      return {
        ...state,
        editingCar: editingCar
      };
    }

    case CarsDemoActions.SAVE_CAR: {
      const car = action.payload;
      let cars;
      console.log(action.payload);
      if (state.cars.find(item => item.id === car.id)) {
        console.log('finded');
        cars = state.cars.map(item => (item.id === car.id ? car : item));
        state.cars = cars;
      } else {
        state.cars.push(car);
      }
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
