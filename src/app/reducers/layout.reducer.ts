import * as LayoutActions from '../actions/layout.actions';

export interface State {
  modalExample: boolean;
  carsDemoModal: boolean;
}

const initialState: State = {
  modalExample: false,
  carsDemoModal: false
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

    default: {
      return state;
    }
  }
}
