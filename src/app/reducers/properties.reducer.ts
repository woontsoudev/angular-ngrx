import * as PropertyActions from '../actions/properties.actions';
import Unit from '../models/unit.model';
import Property from '../models/property.model';

export interface State {
  properties: Property[];
  selectedProperty: {} | Property;
  units: Unit[];
  editingUnit: {} | Unit;
}

const initialState: State = {
  properties: [],
  selectedProperty: null,
  units: [],
  editingUnit: null
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
      const selectedProperty = action.payload;

      return {
        ...state,
        selectedProperty
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

    case PropertyActions.SAVE_UNIT: {
      const unit = action.payload;

      if (state.units.find(item => item.id === unit.id)) {
        state.units = state.units.map(
          item => (item.id === unit.id ? unit : item)
        );
      } else {
        state.units.push(unit);
      }

      return {
        ...state
      };
    }

    case PropertyActions.REMOVE_UNIT: {
      const unitId = action.payload;
      state.units = state.units.filter(unit => unit.id !== unitId);

      return {
        ...state
      };
    }

    default:
      return state;
  }
}
