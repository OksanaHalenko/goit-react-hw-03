import { useState } from "react";
import css from "./App.module.css";
import initialContacts from "../../initialContacts.json";

import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} />
    </div>
  );
}

export default App;
