import { connect } from 'react-redux';
import {
  actionRemoveContact,
  actionContactFromLC,
  actionSetFilter,
} from '../../redux/reduxActions';
import { useEffect } from 'react';
import style from './ContactList.module.css';

const ContactList = ({
  contacts,
  filter,
  onRemove,
  contactFromLC,
  resetFilter,
}) => {
  useEffect(() => {
    const savedContacts = localStorage.getItem('name');
    if (savedContacts === 'undefined') return;
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts === null) return;
    if (parsedContacts.length === 0) return;
    contactFromLC(parsedContacts);
  }, [contactFromLC]);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return contacts.length !== 0 ? (
    <ul className={style.contactUl}>
      {getVisibleContacts().map(({ id, name, phone }) => {
        return (
          <li className={style.contactLi} key={id}>
            <p className={style.name}>{name}</p>
            <p className={style.phone}>{phone}</p>
            <p
              onClick={() => {
                onRemove(id);
                resetFilter();
              }}
              className={style.p__delete}
            >
              Delete
            </p>
          </li>
        );
      })}
    </ul>
  ) : null;
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actionRemoveContact(id)),
  contactFromLC: arrayContacts => dispatch(actionContactFromLC(arrayContacts)),
  resetFilter: () => dispatch(actionSetFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
