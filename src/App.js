import './App.scss';
import NavBar from './components/nav-bar/navBar';
import Home from './components/home/home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <div className="content">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
