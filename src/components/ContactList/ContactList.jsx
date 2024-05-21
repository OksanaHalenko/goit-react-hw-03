import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ initialContacts }) {
  return (
    <div className={css.wrapper}>
      {initialContacts.map((contact) => (
        <Contact data={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
