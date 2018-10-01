import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to={"todo-list"}>Go to TODO LIST</Link>
        </p>
      </div>
    );
  }
}

export default App;
