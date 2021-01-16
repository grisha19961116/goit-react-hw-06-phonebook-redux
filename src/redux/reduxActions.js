import actionsType from './actionsType';
const actionAddContact = newContact => ({
  type: actionsType.ADD,
  payload: newContact,
});

const actionRemoveContact = id => ({
  type: actionsType.DELETE,
  payload: id,
});

const actionSetFilter = filter => ({
  type: actionsType.FILTER,
  payload: filter,
});
export { actionAddContact, actionRemoveContact, actionSetFilter };
