import React, { useState } from "react";
import "./NewContact.css";
import ContactForm from "./ContactForm";

const NewContact = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveContactDataHandler = (enteredContactData) => {
    const contactData = {
      ...enteredContactData,
      id: Math.random().toString(),
    };
    props.onAddContact(contactData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-contact">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Contact</button>
      )}
      {isEditing && (
        <ContactForm
          onSaveContactData={saveContactDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewContact;
