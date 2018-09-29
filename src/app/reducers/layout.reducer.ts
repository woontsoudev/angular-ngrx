import * as LayoutActions from '../actions/layout.actions';

export interface State {
  modalExample: boolean;
  carsDemoModal: boolean;
  usersModal: boolean;
  editUnitModal: boolean;
  unitDetailModal: boolean;
  loader: boolean;
}

const initialState: State = {
  modalExample: false,
  carsDemoModal: false,
  usersModal: false,
  editUnitModal: false,
  unitDetailModal: false,
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

    case LayoutActions.TOGGLE_EDIT_UNIT_MODAL: {
      return {
        ...state,
        editUnitModal: !state.editUnitModal
      };
    }

    case LayoutActions.TOGGLE_UNIT_DETAIL_MODAL: {
      return {
        ...state,
        unitDetailModal: !state.unitDetailModal
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
