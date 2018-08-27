import * as LayoutActions from '../actions/layout.actions';

export interface State {
  modalExample: boolean;
}

const initialState: State = {
  modalExample: false
};

export function reducer(state = initialState, action: LayoutActions.All): State {
  switch (action.type) {
    case LayoutActions.TOGGLE_MODAL_EXAMPLE: {
      return {
        ...state,
        modalExample: !state.modalExample
      };
    }

    default: {
      return state;
    }
  }
}
