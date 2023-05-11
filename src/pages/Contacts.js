import Form from 'components/Form/Form';
import css from '../components/App.module.css';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/Contacts/Contacts';

function ContactsForm() {
  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsForm;
