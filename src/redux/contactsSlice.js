import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../assets/data.json';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: { items: initialContacts },

  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
