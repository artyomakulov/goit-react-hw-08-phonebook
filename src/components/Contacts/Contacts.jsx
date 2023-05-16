import React from 'react';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';

const notifyDelete = () => toast.error('Сontact deleted successfully!');

export default function ContactList() {
  const { data: contacts = [] } = useFetchContactsQuery();

  console.log('contacts', contacts);

  const [func] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
      <ol className={css.ContactList}>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <li className={css.ContactList_item} key={id}>
              <p>
                {name}: {number}
              </p>
              <Button
                variant="contained"
                className={css.ContactList_btn}
                onClick={() => notifyDelete(func(id))}
                type="button"
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ol>
    </>
  );
}
