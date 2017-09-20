import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import env from '../env';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(thunkMiddleware.withExtraArgument(env))
);

export default function setupStore() {
  return createStore(rootReducer, enhancers);
}
