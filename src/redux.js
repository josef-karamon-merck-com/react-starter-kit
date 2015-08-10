import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { devTools, persistState } from 'redux-devtools';
import { routerStateReducer } from 'redux-react-router';
import * as reducers from 'reducers';
import { sessionSettings } from 'utils';

import { O365API } from 'api';

function hasApiError(response) {
  switch (response.status) {
    case 401:
      sessionSettings.o365Token = null;
      O365API.requestToken();
      return true;
    default:
      return false;
  }
}

function apiPromiseMiddleware() {
  return (next) => (action) => {
    const { apiPromise, types, ...rest } = action;
    if (!apiPromise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });
    return apiPromise.then(
      (result) => {
        if (hasApiError(result)) {
          return;
        }
        next({ ...rest, payload: result, type: SUCCESS });
      },
      (error) => next({ ...rest, error, type: FAILURE })
    );
  };
}

const finalReducers = {...reducers, router: routerStateReducer};

let createPromiseStore = applyMiddleware(apiPromiseMiddleware)(createStore);

// compose middlewares

//const finalCreateStore = compose(
//  devTools(),
//  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
//  createStore
//);

const reducer = combineReducers(finalReducers);
export const store = window.__redux__ = createPromiseStore(reducer);
