import { combineReducers } from 'redux';
import actionsType from './actionsType';

function reducerContacts(state = [], { type, payload }) {
  switch (type) {
    case actionsType.ADD:
      const arrayAdd = [...state, payload];
      localStorage.setItem('name', JSON.stringify(arrayAdd));
      return arrayAdd;

    case actionsType.LC:
      console.log(payload, `actionsType lc`);
      return payload;

    case actionsType.DELETE:
      const arrayRemove = [...state.filter(contact => contact.id !== payload)];
      localStorage.setItem('name', JSON.stringify(arrayRemove));
      return arrayRemove;

    default:
      return state;
  }
}

function reducerFilter(state = '', { type, payload }) {
  if (actionsType.FILTER === type) {
    return payload;
  }
  return state;
}
export const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: reducerFilter,
});
