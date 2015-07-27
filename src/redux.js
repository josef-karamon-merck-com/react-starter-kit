import { createStore, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { todos } from './reducers';

import { routerStateReducer } from 'redux-react-router';

console.log(todos);

const finalReducers = {
  router: routerStateReducer,
  todos
};

// compose middlewares
const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(finalReducers);
export const store = window.__redux__ = finalCreateStore(reducer);
