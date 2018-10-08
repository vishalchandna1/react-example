import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './middlewares/api';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './modules/';

export default function configureStore() {
 return createStore(reducers, composeWithDevTools(applyMiddleware(apiMiddleware)))
}