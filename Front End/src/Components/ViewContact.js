// src/components/ContactList.js
import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../index.css';

const ViewContact = ({ deleteContact }) => {
    const location = useLocation();
  const contact = location.state || {};
  const navigation = useNavigate();

  const handleDelete = (id) => {
    deleteContact(id);
    navigation('/')
  };

  const handleUpdate = (value) => {
    navigation('/add',{state:value})
  };

  return (
    <div className='container-fluid mt-2'>
      <div className="header">
      <h6 className='mb-4'>Contact Details</h6>
                <div className="back-button">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigation('/')}>Back</button>
                </div>
            </div>
      <ul className="list-group">
         <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
  <div>
    <p className="mb-1">Name  : <strong>{contact.name}</strong></p>
    <p className="mb-1">Gender  : <strong>{contact.gender}</strong></p>
    <p className="mb-1">Contact Type  : <strong>{contact.type}</strong></p>
    <p className="mb-0">Contact No  : <strong>{contact.phone}</strong></p>
  </div>
  <div>
  <button className="btn btn-primary btn-sm m-2"><EditIcon fontSize="small" onClick={() => handleUpdate(contact)}/></button>
  <button className="btn btn-danger btn-sm"><DeleteIcon fontSize="small" onClick={() => handleDelete(contact.id)} /></button>
  </div>
</li>

      </ul>
    </div>
  );
};

export default ViewContact;
