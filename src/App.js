import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const analyticsData = {
      event_name: "xyz",
      action: "click",
      category: "chocoloates",
      label: "Dark chocolate",
      value: "Lindt",
    }
    return (
      <div className="App" data-analytics={ JSON.stringify(analyticsData) }>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
