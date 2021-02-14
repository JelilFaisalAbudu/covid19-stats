import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-top">
    <div>
      <Link className="brand" to="/home">COVID-19</Link>
    </div>
    <div className="navbar-nav">
      <Link to="/">Home</Link>
      <Link to="/quotes">Quote</Link>
    </div>

  </div>
);

export default Navbar;
