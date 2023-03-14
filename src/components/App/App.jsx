
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { ContactForm } from "../Form/Form";

import { StyledMainTitle, StyledTitle, Wrapper } from "./App.styled";

const App = () => {
  return (
    <Wrapper>
      <StyledMainTitle>Phonebook</StyledMainTitle>
      <ContactForm/>
      <StyledTitle>Contact List</StyledTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  )
};

export { App };

