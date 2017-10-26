import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import routes from './routes';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header
          style={{ display: 'flex', justifyContent: 'space-around' }}
          className="App-header"
        >
          <Link style={{ color: 'white' }} to="/">
            {' '}
            Home{' '}
          </Link>
          <Link style={{ color: 'white' }} to="/About">
            {' '}
            About{' '}
          </Link>
          <Link style={{ color: 'white' }} to="/Contact">
            {' '}
            Contact{' '}
          </Link>
        </header>
        <div className="">{routes}</div>
      </div>
    );
  }
}
export default App;
