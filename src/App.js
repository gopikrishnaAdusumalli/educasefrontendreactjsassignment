 // import logo from './logo.svg';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import LandingScreen from './components/LandingScreen'

import LoginScreen from './components/LoginScreen'

import SignupScreen from './components/SignupScreen'

import Profile from './components/Profile';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LandingScreen />} />
        <Route exact path = "/login-screen" element = {<LoginScreen />} /> 
        <Route exact path = "/signup-screen" element = {<SignupScreen />} />
        <Route exact path = "/profile" element = {<Profile />} />
      </Routes>
    </BrowserRouter>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


  );
}

export default App;
