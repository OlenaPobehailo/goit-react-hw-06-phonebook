import { ADD_CONTACT, DELETE_CONTACT, UPDATE_FILTER } from './constants';
import initialContacts from 'assets/data.js';

const initialState = {
  contacts: initialContacts,
  filter: '',
};
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    }
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
