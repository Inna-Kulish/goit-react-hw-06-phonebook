import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { MainContainer, Title } from 'components/App/App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? [],);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    
    if (existContact(name)) {
      return alert(`${name} is already is contacts.`);
    }
    setContacts(prev => [contact, ...prev]);
  };
  
  const existContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  const chengeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={chengeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </MainContainer>
  );
};

export { App };
