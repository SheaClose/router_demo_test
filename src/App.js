import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header
          style={{ display: 'flex', justifyContent: 'space-around' }}
          className="App-header"
        >
          <a href="#" style={{ color: 'white' }}>
            Home
          </a>
          <a href="#" style={{ color: 'white' }}>
            About
          </a>
          <a href="#" style={{ color: 'white' }}>
            Contact
          </a>
        </header>
        <p style={{ width: '80vw', margin: '30px auto' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p style={{ width: '80vw', margin: '30px auto' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}
export default App;

// <Link style={{ color: 'white' }} to="/"> Home </Link>
// <Link style={{ color: 'white' }} to="/About"> About </Link>
// <Link style={{ color: 'white' }} to="/Contact"> Contact </Link>
