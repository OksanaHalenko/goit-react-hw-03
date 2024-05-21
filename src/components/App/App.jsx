import { useState } from "react";
import css from "./App.module.css";
import initialContacts from "../../initialContacts.json";

import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <hr />
      <SearchBox value={filter} onFilter={setFilter} />
      <hr />
      <ContactList contacts={visibleContact} />
    </div>
  );
}

export default App;
