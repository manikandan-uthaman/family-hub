import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './navBar.scss';

const NavBar = ({ user }) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <NavLink className="brand" to="/">
            <img src={logo} alt="" width="65" height="52" />
          </NavLink>
          {/* <div className="navbar-nav logo-name">Family Hub</div> */}
        </div>
        <div className="menu">
          {!user && (
            <React.Fragment>
              <div className="menu-item">
                <NavLink className="link register-link" to="/register">
                  Register
                </NavLink>
              </div>
              <div className="menu-item">
                <NavLink className="link" to="/login">
                  Login
                </NavLink>
              </div>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <div className="menu-item">
                <span className="link" to="/">
                  Hi, {user.name}
                </span>
              </div>
              <div className="menu-item">
                <NavLink className="link register-link" to="/logout">
                  Logout
                </NavLink>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
