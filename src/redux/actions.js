import { DELETE_CONTACT, ADD_CONTACT, UPDATE_FILTER } from './constants';

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const updateFilter = filter => ({
  type: UPDATE_FILTER,
  payload: filter,
});
