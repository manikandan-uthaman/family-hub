import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav-bar/navBar';
import Home from './components/home/home';
import Login from './components/login/login';
import auth from './services/authService';
import './App.scss';
import Logout from './components/logout/logout';
import Register from './components/register/register';
import ProtectedRoute from './components/common/protectedRoute';
import Shop from './components/shop/shop';

const a = 1;
class App extends Component {     
  state = {}
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user        });
    console.log("TEST ESLINT")
  }

  testList() {}

  render() {
    const { user } = this.state;
    return (
      <div className="app">
        <NavBar user={user}></NavBar>
        <div className="content">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <ProtectedRoute
              path="/shop"
              render={(props) => <Shop {...props} />}
            ></ProtectedRoute>
            <Route
              path="/"
              render={(props) => <Home {...props} user={user} />}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
