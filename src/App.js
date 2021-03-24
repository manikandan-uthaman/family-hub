import logo from './assets/images/logo_main.png';
import './App.scss';
import NavBar from './components/nav-bar/navBar';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="h1">Family Hub Project</p>
      </header>
    </div>
  );
}

export default App;
