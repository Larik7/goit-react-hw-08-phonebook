import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;
export const selectFilter = state => state.filter.query;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// const contacts = useSelector(selectContact);
// const filterContacts = useSelector(selectFilter);

// const selectVisibleContacts = () => {
//   if (!filterContacts) return contacts;

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterContacts.toLowerCase())
//   );
// };

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filterContacts) => {
    if (!filterContacts) {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterContacts.toLowerCase()));
  }
);