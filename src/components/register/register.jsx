import React from 'react';
import Form from '../common/form/form';
import auth from '../../services/authService';
import logo from '../../assets/images/logo.png';

import './register.scss';

class Register extends Form {
  state = {
    data: {
      name: '',
      username: '',
      password: '',
      repeat_password: '',
    },
    errors: {},
  };

  emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  async doSubmit() {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    if (data.password !== data.repeat_password) {
      errors['form'] = 'Password and Repeat Password doesnot match';
      this.setState({ data, errors });
      return;
    } else delete errors['form'];
    try {
      await auth.register(data);
      window.location = '/';
    } catch (ex) {
      errors['form'] =
        ex.response && ex.response.data
          ? ex.response.data
          : 'An unexpected error has occured. Please try again later.';
      data['password'] = '';
      data['repeat_password'] = '';
      this.setState({ data, errors });
    }
  }

  validateProperty = (name, value) => {
    if (name === 'username')
      if (value.trim() === '') return 'Username is required';
      else if (!this.emailRegex.test(value.trim()))
        return 'Username must be a valid email';
      else return null;

    if (name === 'name') if (value.trim() === '') return 'Name is required';

    if (name === 'password')
      if (value.trim() === '') return 'Password is required';
      else return null;
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="register-container">
          <div className="form">
            <img src={logo} alt="" width="70" height="56" />
            <div className="register-desc">
              <p className="desc-heading">Register</p>
              <p className="desc">to access Family Hub</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput('username', 'Username')}
              {this.renderInput('name', 'Name')}
              {this.renderInput('password', 'Password', 'password')}
              {this.renderInput(
                'repeat_password',
                'Re-enter Password',
                'password'
              )}
              {errors['form'] && (
                <div className="error-div">
                  <span className="error-msg">{errors['form']}</span>
                </div>
              )}
              {this.renderButton('Register')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
