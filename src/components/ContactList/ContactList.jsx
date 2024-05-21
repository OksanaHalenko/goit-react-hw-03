import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <div className={css.wrapper}>
      {contacts.map((contact) => (
        <Contact data={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
