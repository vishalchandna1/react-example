import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li className="col-6 col-md-4 col-lg-3 mt-3 px-2">
    <img className="image-item" src={value.imgUrl}/>
  </li>
)

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className="row">
      {items.map((value, index) => (
        <SortableItem key={`item-${value.id}`} index={index} value={value} />
      ))}
    </ul>
  )
})

class SortableComponent extends Component {
  render() {
    return <SortableList items={this.props.data} onSortEnd={this.props.onSortEnd} axis="xy"/>;
  }
}

class App extends Component {
  render() {
    const {data} = this.props
    const {list} = data
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="grid-list-container">
          <SortableComponent data={list} onSortEnd={this.props.orderList}/>
        </div>
      </div>
    )
  }
}

export default App;
