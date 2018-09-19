import * as PropertyActions from '../actions/properties.actions';

export interface State {
  properties: object[];
  units: object[];
  selectedProperty: object;
}

const initialState: State = {
  properties: [],
  units: [],
  selectedProperty: {}
};

export function reducer(
  state = initialState,
  action: PropertyActions.All
): State {
  switch (action.type) {
    case PropertyActions.SET_PROPERTIES:
      const properties = action.payload;
      return {
        ...state,
        properties
      };
    case PropertyActions.SET_PROPERTY:
      return {
        ...state,
        selectedProperty: action.payload
      };
    case PropertyActions.SET_UNITS:
      const units = action.payload;
      return {
        ...state,
        units
      };
    default:
      return state;
  }
}
