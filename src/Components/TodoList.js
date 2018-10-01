import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [],
      listItem:'',
    }
  }
  pushItem(e) {
    e.preventDefault();
    this.setState(() => {
      let listData = this.state.listData
      return {
        listData: this.state.listItem ? listData.concat([{value: this.state.listItem, id: Math.random(1)}]) : listData,
        listItem:'',
      }
    })
    return false;
  }
  removeItem(index) {
    let listData = this.state.listData
    listData.splice(index, 1)
    this.setState(() => {
      return {
        listData: listData,
      }
    })
  }
  onInputChange(e) {
    let listItem = e.target.value
    this.setState(() => { return { listItem: listItem }})
  }
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          <Link to={"/"}>Go to HOME PAGE</Link>
        </p>

        <div className="todo-list-container">
          <h1>Welcome to Todo List</h1>
          <div className="list-items">
            <ul>
              {this.state.listData.map((item, index) => {
                return <li key={item.id}>
                  <p>{index+1}. {item.value}</p>
                  <button type="button" onClick={this.removeItem.bind(this, index)}>X</button>
                </li>
              })}
            </ul>
          </div>
          <form onSubmit={this.pushItem.bind(this)}>
            <input type="text" value={this.state.listItem} onChange={this.onInputChange.bind(this)} placeholder="Item Name"/>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
