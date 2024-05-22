import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ data: { id, name, number }, deleteContact }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
