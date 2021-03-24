import React from 'react';
import logo from '../../assets/images/logo.png';
import './navBar.scss';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <a className="brand" href="#">
            <img src={logo} alt="" width="40" height="32" />
          </a>
          <div className="navbar-nav logo-name">Family Hub</div>
        </div>
        <div className="menu">
          <div className="menu-item">
            <a>Register</a>
          </div>
          <div className="menu-item">
            <a>Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
