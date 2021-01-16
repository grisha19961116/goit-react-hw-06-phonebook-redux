import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { actionAddContact } from '../../redux/reduxActions';

function ContactForm({ items, onAdd }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        console.log('Sorry, we are not have ' + name + '.');
    }
  };
  const handleCheckUniqueContact = (items, name) => {
    const isExistContact = !!items.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  };

  const validateFrom = () => {
    if (!name || !phone) {
      toast('Some filed is empty');
      return false;
    }

    return handleCheckUniqueContact(items, name);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    const isValidForm = validateFrom();

    if (!isValidForm) return;

    const newContact = { id: uuidv4(), name, phone };

    onAdd(newContact);
    resetForm();
  };

  return (
    <form onSubmit={handleFromSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
      ></input>
      <input
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChangeForm}
      ></input>
      <button type="submit">Add Contact</button>
    </form>
  );
}
const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  onAdd: newContact => dispatch(actionAddContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
