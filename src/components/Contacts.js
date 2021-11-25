import React from "react";
import "./Contacts.css";
import ContactItem from "./ContactItem";

const Contacts = (props) => {
  return (
    <div className="contacts">
      {props.items.map((contact) => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDelete={props.onDeleteContact}
        />
      ))}
    </div>
  );
};

export default Contacts;
