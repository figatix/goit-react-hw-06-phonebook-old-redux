import {  STORAGE_KEY } from './constants';
// import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [],
  filter: '',
};

export const contactsReducer = (state=initialState, action) => {
  switch (action.type){
    case 'contacts/addNewContact':{
      const name  = action.payload.name
      const isExist = state.contacts.find(person => person.name === name.trim())
  
      if (isExist) {
        alert(`${name} is already in contacts.`)
        return state
      }

      const finallyNewContact = {
        id: nanoid(),
        ...action.payload
      }

      return {
        ...state,
        contacts:[
          finallyNewContact,
          ...state.contacts,
        ]
      }
    }

    case 'contacts/deleteContact':{
      return {
        ...state,
        contacts: state.contacts.filter(person => person.id !== action.payload),
      }
    }

    case 'filter/setFilterState':{
      return{
        ...state,
        filter: action.payload
      }
    }
    default: return state;
  }
}

export const rootReducer = contactsReducer;

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// ==================================
