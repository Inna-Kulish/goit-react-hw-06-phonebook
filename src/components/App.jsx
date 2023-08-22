import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { MainContainer, Title } from 'components/App/App.styled';

const App = () => {
  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <ContactForm/>
      <Title>Contacts</Title>
      <Filter/>
      <ContactList/>
    </MainContainer>
  );
};

export { App };
