import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppContextConsumer} from './context/AppContext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AppContextConsumer>
          {values => {
            return AppConsumerTemplate(values)
          }}
        </AppContextConsumer>
        
      </div>
    );
  }
}

const AppConsumerTemplate = (values) => {
  return <div className="age-container">
    Age: {values.age}
    <br/>
    <button onClick={values.setAge.bind(this, values.age + 1)}>Increse Age By 1</button>
  </div>
}

export default App;
