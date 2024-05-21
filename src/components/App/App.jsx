import css from "./App.module.css";
import initialContacts from "../../initialContacts.json";
import ContactList from "../ContactList/ContactList";

function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactList initialContacts={initialContacts} />
    </div>
  );
}

export default App;
