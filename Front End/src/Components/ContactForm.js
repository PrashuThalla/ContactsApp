import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const ContactForm = ({ addContact,updateContact }) => {

  const navigation = useNavigate();
  const location = useLocation();
  const contact = location.state || {};

  const [title, setTitle] = useState('Add')
  const [user, setUser] = useState({
    name:'',
    gender:'',
    type:'',
    phone:''
  });

  useEffect(()=>{
    debugger;
    if(contact.id!=undefined&&contact.id!=null){
      setUser(contact);
      setTitle('Update');
    }else{
      setUser({
        name:'',
        gender:'',
        type:'',
        phone:''
      });
      setTitle('Add');
    }
  },[addContact])

  const handleSubmit = (e) => {
    e.preventDefault();
    user.id===undefined?addContact(user):updateContact(user);
    navigation('/');
  };

  return (
    <div className='container  mt-2'>
    <form onSubmit={handleSubmit}>
    <div className="header">
      <h6>{title} Contact</h6>
                <div className="back-button">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigation('/')}>Back</button>
                </div>
            </div>
      <div className="form-group mb-2">
        <label>Name:</label>
        <input type="text" className="form-control" placeholder='Enter Name' value={user.name} onChange={(e) =>  setUser({...user,name:e.target.value})} required />
      </div>
      <div className="form-group mb-2">
        <label>Gender:</label>
        <select className="form-control" value={user.gender} onChange={(e) =>  setUser({...user,gender:e.target.value})} required>
        <option value="">select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label>Type:</label>
        <select className="form-control" value={user.type} onChange={(e) =>  setUser({...user,type:e.target.value})} required>
        <option value="">select</option>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label>Phone:</label>
        <input type="number" className="form-control" placeholder='Enter Phone No' value={user.phone} onChange={(e) => setUser({...user,phone:e.target.value})} required 
        />
      </div>
      <div className='d-flex justify-content-end'>
      <button type="submit" className="btn btn-success btn-sm mt-2 float-right">{title} Contact</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
