
import React, { useEffect } from "react";
import { getContactsState, getFilterState } from "redux/selectors";
import { ContactItem } from "../ContactItem/ContactItem";
import { StyledContactList } from "./ContactList.styled";
import { useSelector} from 'react-redux'
import { STORAGE_KEY } from "redux/constants";

const ContactList = () => {
  const filterState = useSelector(getFilterState)
  const contactsState = useSelector(getContactsState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contactsState))
  }, [contactsState])

  const handlerFilterContacts = () => {
    const normalizeName = filterState.toLowerCase().trim()
    const isContacts = (contactsState.length !== 0);
    return isContacts && contactsState.filter(person => person.name?.toLowerCase().includes(normalizeName))
  }
  
  const filteredContacts = handlerFilterContacts();

  return (
    <StyledContactList>
      { filteredContacts &&
      filteredContacts.map(({ name, id, number }) => {  
        return <ContactItem
          personName={name}
          personNumber={number}
          key={id}
          id={id}
          />
      })}
    </StyledContactList>
  )
}

export { ContactList };

