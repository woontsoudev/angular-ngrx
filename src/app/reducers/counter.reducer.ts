import * as CounterActions from '../actions/counter.actions';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: CounterActions.All): State {
  switch (action.type) {
    case CounterActions.INCREMENT_COUNTER: {
      return {
        ...state,
        count: state.count + 1
      };
    }

    case CounterActions.DECREMENT_COUNTER: {
      return {
        ...state,
        count: state.count - 1
      };
    }

    default: {
      return state;
    }
  }
}
