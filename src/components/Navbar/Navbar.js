import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg" alt="Rockwell Automation" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Products</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Solutions & Industries</a></li>
        <li><a href="/">Support</a></li>
        <li><a href="/">Sales & Partners</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="/login"><i className="fa fa-user"></i></a>
        <a href="/search"><i className="fa fa-search"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;
