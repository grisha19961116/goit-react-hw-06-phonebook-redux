import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { actionAddContact } from '../../redux/reduxActions';

function ContactForm({ contacts, onAdd }) {
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
  const handleCheckUniqueContact = (contacts, name, phone) => {
    const isExistName = contacts.some(contacts => contacts.name === name);
    const isExistPhone = contacts.some(contacts => contacts.phone === phone);
    isExistName &&
      toast.warn('⚠️ You have contact with same name!', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    isExistPhone &&
      toast.error('🚀 Number has been using!', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    return !isExistPhone;
  };

  const validateFrom = () => {
    if (!name && !phone) {
      toast.warn('⚠️ Fields are empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (!name && phone) {
      toast.warn('⚠️ Field name empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (!phone && name) {
      toast.warn('⚠️ Field phone empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (phone.length !== 10) {
      toast.warn('⚠️ Number has to have 10 symbols!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (name.length > 12) {
      toast.warn('⚠️ Name has to be no longer 12 characters!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    return handleCheckUniqueContact(contacts, name, phone);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    const isExistPhone = validateFrom();
    if (!isExistPhone) return;
    const newContact = { id: uuidv4(), name, phone };
    onAdd(newContact);
    resetForm();
  };

  return (
    <form className={style.contactForm} onSubmit={handleFromSubmit}>
      <input
        className={style.contactForm__input}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
      ></input>
      <input
        className={style.contactForm__input}
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChangeForm}
      ></input>
      <button className={style.buttonSubmit} type="submit">
        Add Contact
      </button>
    </form>
  );
}
const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  onAdd: newContact => dispatch(actionAddContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
