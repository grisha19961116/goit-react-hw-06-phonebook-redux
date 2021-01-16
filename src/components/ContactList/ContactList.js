import style from './ContactList.module.css';
import { connect } from 'react-redux';
import { actionRemoveContact } from '../../redux/reduxActions';

const ContactList = ({ items, filter, onRemove }) => {
  const getVisibleContacts = (items, filterInput) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterInput.toLowerCase()),
    );
  };

  if (items.length === 0) return null;

  return (
    <ul>
      {getVisibleContacts(items, filter).map(({ id, name, phone }) => {
        return (
          <li key={id}>
            {name} : {phone}
            <button
              onClick={() => {
                onRemove(id);
              }}
              className={style.button__delete}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  items: state.items,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actionRemoveContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
