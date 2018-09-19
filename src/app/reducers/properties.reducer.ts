import * as PropertyActions from '../actions/properties.actions';

export interface State {
  properties: any[];
  selectedProperty: any;
  units: any[];
  editingUnit: any;
}

const initialState: State = {
  properties: [],
  selectedProperty: {},
  units: [],
  editingUnit: {}
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
    case PropertyActions.SET_EDITING_UNIT:
      const editingUnit =
        action.payload !== ''
          ? state.units.find(unit => unit.id === action.payload)
          : {};
      return {
        ...state,
        editingUnit
      };
    default:
      return state;
  }
}
