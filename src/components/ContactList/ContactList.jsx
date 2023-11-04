import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { DeleteButton, ListItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name + ': ' + contact.number}
          <DeleteButton
            type="button"
            name="delete"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
