import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './ContactList.css';
import '../index.css';

const ContactList = ({ contacts }) => {
    const navigation = useNavigate();
    const [Tab,setTab]=useState('all');

    const ViewDataHandler =(value)=>{
        console.log(value)
        navigation('/view',{ state: value })
    }
    const Changetab =(tabV)=>{
      setTab(tabV);
    }
    const filterContacts = (tab) => {
      switch (tab) {
          case 'personal':
              return contacts.filter(contact => contact.type === 'Personal');
          case 'business':
              return contacts.filter(contact => contact.type === 'Business');
          case 'all':
          default:
              return contacts;
      }
  };

  return (
    <div className='container-fluid  mt-2'>
       <div className="header">
                <h6 className='mb-3'>Contact List</h6>
                <div className="back-button">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigation(-1)}> Back</button>
                </div>
            </div>
      <div className="tabs">
                <button className={Tab === 'all' ? 'active' : ''} onClick={() => Changetab('all')}>All</button>
                <button className={Tab === 'personal' ? 'active' : ''} onClick={() => Changetab('personal')}>Personal</button>
                <button className={Tab === 'business' ? 'active' : ''} onClick={() => Changetab('business')}>Business</button>
            </div>
      <ul className="list-group">
        {filterContacts(Tab).map(contact => (
          <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>ViewDataHandler(contact)}>
            <div>
            <span>{contact.name}</span><br/>
            <span>{contact.phone}</span>
            </div>
            <div>
            <VisibilityIcon />
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
