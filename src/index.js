import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import the analytics
import { initAnalystics } from './analytics';

window.onload = function() {
  initAnalystics();
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
