import React, { useEffect, useState } from "react";
import "./App.css";
import NewContact from "./components/NewContact";
import Contacts from "./components/Contacts";


const App = (props) => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contact');
    const parsedContacts = JSON.parse(storedContacts);
    setContacts(parsedContacts);
  }, []);
  

  useEffect(()=>{
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContactHandler = (contact) => {
    setContacts((prevContacts) => {
      return [contact, ...prevContacts];
    });
  };

  const deleteContactHadler = (contactId) => {
    setContacts(prevContacts => {
      const updatedContacts = prevContacts.filter(contact => contact.id !== contactId) 
        return updatedContacts;
    });
  }

  return (
    <div id="app-container">
      <NewContact onAddContact={addContactHandler} />
      <Contacts items={contacts} onDeleteContact={deleteContactHadler} />
    </div>
  );
};

export default App;
