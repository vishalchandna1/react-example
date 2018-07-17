import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContextProvider} from './context/AppContext'



ReactDOM.render(<AppContextProvider>
    <App />
  </AppContextProvider>, document.getElementById('root'));
registerServiceWorker();
