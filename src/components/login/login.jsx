import React from 'react';
import auth from '../../services/authService';
import Form from '../common/form/form';
import logo from '../../assets/images/logo.png';
import './login.scss';

class Login extends Form {
  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
  };

  emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  async doSubmit() {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    try {
      await auth.login(data.username, data.password);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        errors['form'] = ex.response.data;
      }
      data['password'] = '';
      this.setState({ data, errors });
    }
  }

  validateProperty = (name, value) => {
    if (name === 'username')
      if (value.trim() === '') return 'Username is required';
      else if (!this.emailRegex.test(value.trim()))
        return 'Username must be a valid email';
      else return null;
    if (name === 'password')
      if (value.trim() === '') return 'Password is required';
      else return null;
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="login-container">
          <div className="form">
            <img src={logo} alt="" width="70" height="56" />
            <div className="login-desc">
              <p className="desc-heading">Sign in</p>
              <p className="desc">to access Family Hub</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput('username', 'Username')}
              {this.renderInput('password', 'Password', 'password')}
              {errors['form'] && (
                <div className="error-div">
                  <span className="error-msg">{errors['form']}</span>
                </div>
              )}
              {this.renderButton('Login')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
