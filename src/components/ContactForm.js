import React, { useState } from "react";
import "./ContactForm.css" 


const ContactForm = (props) => {
  
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
 

  const nameChagnerHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const numberChagnerHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  

  const submitHandler = (event) => {
    event.preventDefault();

    const contactData = {
      name: enteredName,
      number: enteredNumber,
    };

    

    
    props.onSaveContactData(contactData);

    
    setEnteredName('');
    setEnteredNumber('');
    
  };

    return (
        <form onSubmit={submitHandler}>
        
          <div className="new-contact__control" id="new-contact__control-1">
            <label>Name</label>
            <input type="text" value={enteredName} onChange={nameChagnerHandler} />
          </div>
          <div className="new-contact__control">
            <label>Number</label>
            <input type="text" value={enteredNumber} onChange={numberChagnerHandler} />
          </div>
          
          <div className="new-contact__actions"> 
            <button className="form-button" type="submit">Add Contact</button>
            <button className="form-button" type="button" onClick={props.onCancel}>Cancel</button>
          </div>
        </form>
      
    );
  }
   
  
  export default ContactForm;
