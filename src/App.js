import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const renderList = (props) => {
  const { list } = props;
  return (
    <ul>
      {list.map(item =><li key={Math.random(1)}>{item.title}</li>)}
    </ul>
  )
}

class App extends Component {
  componentDidMount() {
    const { requestData } = this.props;
    requestData()
  }
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
        <div className="list-container">
          {renderList(this.props)}
        </div>
      </div>
    )
  }
}

export default App;
