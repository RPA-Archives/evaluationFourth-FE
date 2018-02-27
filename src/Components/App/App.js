import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header.js';
import Login from '../Login/login.js';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
