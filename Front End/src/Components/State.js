// src/components/Stats.js
import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Stats = ({ contacts }) => {
  
  const navigation = useNavigate();
  const totalContacts = contacts.length;
  const maleContacts = contacts.filter(contact => contact.gender === 'Male').length;
  const femaleContacts = contacts.filter(contact => contact.gender === 'Female').length;
  const personalContacts = contacts.filter(contact => contact.type === 'Personal').length;
  const businessContacts = contacts.filter(contact => contact.type === 'Business').length;

  return (
    <div className="container-fluid mt-2">
      <div className="header">
      <h6 className='mb-4'>Contact Stats</h6>
                <div className="back-button">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigation(-1)}>Back</button>
                </div>
            </div>
      <ul className="list-group">
        <li className="list-group-item">Total Contacts  : {totalContacts}</li>
        <li className="list-group-item">Male Contacts  : {maleContacts}</li>
        <li className="list-group-item">Female Contacts  : {femaleContacts}</li>
        <li className="list-group-item">Personal Contacts  : {personalContacts}</li>
        <li className="list-group-item">Business Contacts  : {businessContacts}</li>
      </ul>
    </div>
  );
};

export default Stats;
