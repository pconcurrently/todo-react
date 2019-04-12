import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import ToDo from './components/ToDo/ToDo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <ToDo />
        </header>
      </div>
    );
  }
}

export default App;
