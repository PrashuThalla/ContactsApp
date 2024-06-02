// src/App.js
import React, { useState } from 'react';
import AddContact from './Components/ContactForm';
import Home from './Components/ContactList';
import ViewContacts from './Components/ViewContact';
import Stats from './Components/State';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', gender: 'Male', type: 'Business',phone:'908757658768' },
    { id: 2, name: 'Jane Smith', gender: 'Female', type: 'Personal',phone:'09798798896' },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: contacts.length + 1, ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map(contact =>
        contact.id === updatedContact.id ? { ...contact, ...updatedContact } : contact
      )
    );
  };
  const containerStyle = {
              padding: '0px'
        }
  const footerStyle = {
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '10px',
        };
  return (
    <Router>
      <div className="container-fluid" style={containerStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  contacts={contacts}/>} />
          <Route path="/view" element={<ViewContacts contacts={contacts} deleteContact={deleteContact} updateContact={updateContact} />} />
          <Route path="/add" element={<AddContact addContact={addContact} updateContact={updateContact}/>} /> 
          <Route path='/State' element={<Stats contacts={contacts} />} />
        </Routes>
        <footer style={footerStyle}>
      <p>&copy; 2024 Contact List App</p>
    </footer>
      </div>
    </Router>
  );
};

export default App;
