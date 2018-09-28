import * as UsersActions from '../actions/users.actions';
import { User } from '../models/user.model';

export interface State {
  users: User[];
  editingUser: {} | User;
}

const initialState: State = {
  users: [],
  editingUser: null
};

export function reducer(state = initialState, action: UsersActions.All): State {
  switch (action.type) {
    case UsersActions.SET_USERS: {
      return {
        ...state,
        users: action.payload
      };
    }

    case UsersActions.SET_EDITING_USER: {
      const editingUser =
        action.payload !== null
          ? state.users.find(user => user.id === action.payload.id)
          : {};
      return {
        ...state,
        editingUser: editingUser
      };
    }

    case UsersActions.SAVE_USER: {
      const user = action.payload;
      let users;
      if (state.users.find(item => item.id === user.id)) {
        users = state.users.map(item => (item.id === user.id ? user : item));
        state.users = users;
      } else {
        state.users.push(user);
      }
      return {
        ...state
      };
    }

    case UsersActions.REMOVE_USER: {
      const userId = action.payload.id;
      const users = state.users.filter(user => user.id !== userId);

      return {
        ...state,
        users
      };
    }

    default: {
      return state;
    }
  }
}
