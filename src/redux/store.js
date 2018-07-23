import { createStore, applyMiddleware } from 'redux';
import reducers from './modules/';

export default function configureStore() {
 return createStore(reducers)
}