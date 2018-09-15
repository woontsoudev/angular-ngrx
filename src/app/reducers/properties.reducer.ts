import * as PropertyActions from '../actions/properties.actions';

export interface State {
  properties: object[];
  selectedProperty: object;
}

const initialState: State = {
  properties: [
    {
      label: 'Select a property',
      value: {}
    }
  ],
  selectedProperty: {}
};

export function reducer(
  state = initialState,
  action: PropertyActions.All
): State {
  switch (action.type) {
    case PropertyActions.ADD_PROPERTIES:
      return {
        ...state,
        properties: state.properties.concat(action.payload)
      };
    case PropertyActions.SELECT_PROPERTY:
      return {
        ...state,
        selectedProperty: action.payload
      };
    default:
      return state;
  }
}
