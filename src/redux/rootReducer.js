import { combineReducers } from 'redux';
import actionsType from './actionsType';

function reducerContacts(state = [], { type, payload }) {
  switch (type) {
    case actionsType.ADD:
      return [...state, payload];

    case actionsType.DELETE:
      return [...state.filter(contact => contact.id !== payload)];

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
  items: reducerContacts,
  filter: reducerFilter,
});
