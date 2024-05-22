import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, deleteContact }) {
  return (
    <div className={css.wrapper}>
      {contacts.map((contact) => (
        <Contact
          data={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
