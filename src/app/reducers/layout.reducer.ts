import * as LayoutActions from '../actions/layout.actions';

export interface State {
  modalExample: boolean;
  carsDemoModal: boolean;
  usersModal: boolean;
  unitsModal: boolean;
  loader: boolean;
}

const initialState: State = {
  modalExample: false,
  carsDemoModal: false,
  usersModal: false,
  unitsModal: false,
  loader: false
};

export function reducer(
  state = initialState,
  action: LayoutActions.All
): State {
  switch (action.type) {
    case LayoutActions.TOGGLE_MODAL_EXAMPLE: {
      return {
        ...state,
        modalExample: !state.modalExample
      };
    }

    case LayoutActions.TOGGLE_CARSDEMO_MODAL: {
      return {
        ...state,
        carsDemoModal: !state.carsDemoModal
      };
    }

    case LayoutActions.TOGGLE_UNITS_MODAL: {
      return {
        ...state,
        unitsModal: !state.unitsModal
      };
    }

    case LayoutActions.TOGGLE_LOADER: {
      return {
        ...state,
        loader: !state.loader
      };
    }

    case LayoutActions.TOGGLE_USERS_MODAL: {
      return {
        ...state,
        usersModal: !state.usersModal
      };
    }

    default: {
      return state;
    }
  }
}
