import { useSelector } from 'react-redux';

import { DeleteButton, ListItem } from './ContactList.styled';

const ContactList = () => {
  const  items  = useSelector(state => state.contacts.items);

  console.log(items);

  return (
    
    <ul>
      {items.map(contact => (
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
