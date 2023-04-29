import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { ItemStyled, ListStyled } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/ContactsSelectors';

export const ContactList = () => {
  
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ListStyled>
      {visibleContacts.map(contact => (
        <ItemStyled key={contact.id}>
          <ContactItem contact={contact} />
        </ItemStyled>
      ))}
    </ListStyled>
  );
};