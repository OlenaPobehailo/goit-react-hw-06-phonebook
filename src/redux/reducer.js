import { ADD_CONTACT, DELETE_CONTACT } from './constants';
import initialState from 'assets/data.json';

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT: {
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload),
      };
    }
    case ADD_CONTACT: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    default:
      return state;
  }
};
