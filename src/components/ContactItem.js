import React from "react";
import "./ContactItem.css";

const ContactItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="contact-item">
      <h1>{props.name}</h1>
      <h3>{props.number}</h3>
      <button id="delete-button" type="button" onClick={deleteHandler}>
        delete
      </button>
    </div>
  );
};

export default ContactItem;
