/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => (
  <nav className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
      <div className="nav-title">
        <Link className="brand" to="/">WORLD COVID-19 STATISTICS</Link>
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>

    <div className="nav-links">
      <Link to="/">Home</Link>
    </div>
  </nav>
);

export default Navbar;
