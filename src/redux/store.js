import { createStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';


export const store = createStore(
	contactsReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

