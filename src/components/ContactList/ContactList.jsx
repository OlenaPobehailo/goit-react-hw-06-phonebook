import { DeleteButton, ListItem } from './ContactList.styled';
import contacts from 'assets/data.json'
const ContactList = () => {

  return (
    
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name + ': ' + contact.number}
          <DeleteButton
            type="button"
            name="delete"
            // onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
