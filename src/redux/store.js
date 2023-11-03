import { combineReducers, createStore } from '@reduxjs/toolkit';

import { contactsReducer } from './reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer ,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

