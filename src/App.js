import React, { Component } from 'react';
import Home from './Components/HomePage';
import TodoList from './Components/TodoList';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/todo-list" component={TodoList} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
