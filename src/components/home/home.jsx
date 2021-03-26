import React from 'react';
import './home.scss';
import logo from '../../assets/images/logo.png';
import meet from '../../assets/images/meet.png';
import camera from '../../assets/images/camera.png';
import shopping from '../../assets/images/shopping.png';
import todo from '../../assets/images/todo.png';
import { NavLink } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="header-contents">
          <div className="heading">Family Hub</div>
          <p className="heading-secondary">
            Your dashboard for everyday life. One place for your entire family.
            A place where your family can be together.
          </p>
        </div>
      </div>
      <div className="main-container">
        <div className="features-container">
          <div className="features-left">
            <div className="logo">
              <img src={logo} alt="FH" width="75" height="60" />
            </div>
            <div className="logo-description">
              <p className="desc-heading">Family Hub</p>
              <p className="desc">Different feature to explore</p>
              {!user && <button className="btn btn-danger">Signup</button>}
            </div>
          </div>
          <div className="features-right">
            <div className="features-row">
              <div className="feature feature-first">
                <div className="feature-logo">
                  <img
                    className="feature-img"
                    src={meet}
                    alt="Meet"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="feature-description">
                  <NavLink
                    className={
                      user
                        ? 'feature-desc-heading link'
                        : 'feature-desc-heading'
                    }
                    to="/"
                  >
                    Meet
                  </NavLink>
                  <p className="feature-desc">A family calendar</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-logo">
                  <img
                    className="feature-img"
                    src={camera}
                    alt="Camera"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="feature-description">
                  <p
                    className={
                      user
                        ? 'feature-desc-heading link'
                        : 'feature-desc-heading'
                    }
                  >
                    Click
                  </p>
                  <p className="feature-desc">Relive the moments</p>
                </div>
              </div>
            </div>
            <div className="features-row">
              <div className="feature feature-first">
                <div className="feature-logo">
                  <img
                    className="feature-img"
                    src={shopping}
                    alt="Shop"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="feature-description">
                  <p
                    className={
                      user
                        ? 'feature-desc-heading link'
                        : 'feature-desc-heading'
                    }
                  >
                    Shop
                  </p>
                  <p className="feature-desc">Your grocery list</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-logo">
                  <img
                    className="feature-img"
                    src={todo}
                    alt="ToDO"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="feature-description">
                  <p
                    className={
                      user
                        ? 'feature-desc-heading link'
                        : 'feature-desc-heading'
                    }
                  >
                    Work
                  </p>
                  <p className="feature-desc">Track your tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <p>&copy; Family Hub Corporation Pvt Ltd. All Rights Reserved.</p>
        <p>
          <i className="fa fa-envelope"></i>
          &nbsp;&nbsp;
          <a className="contact-mail" href="mailto:manikandan.mit@outlook.com">
            manikandan.mit@outlook.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
