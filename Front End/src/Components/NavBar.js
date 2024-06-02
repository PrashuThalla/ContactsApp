// src/components/Navbar.js
import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand m-1" to="/">Contact List App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end m-1" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/" activeClassName="active">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/state" activeClassName="active">STATUS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/add" activeClassName="active">ADD NEW</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
