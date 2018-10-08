import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
