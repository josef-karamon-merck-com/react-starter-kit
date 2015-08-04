import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { routerStateReducer } from 'redux-react-router';
import * as reducers from 'reducers';

import promiseMiddleware from 'redux-promise';

const finalReducers = {...reducers, router: routerStateReducer};

let createPromiseStore = applyMiddleware(promiseMiddleware)(createStore);
// compose middlewares
const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(finalReducers);
export const store = window.__redux__ = createPromiseStore(reducer);
