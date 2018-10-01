import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Home from './Components/HomePage';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

const TodoList = Loadable({
  loader: () => import('./Components/TodoList'),
  loading: () => <p>Loading</p>,
});

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
