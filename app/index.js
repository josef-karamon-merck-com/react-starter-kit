import './css/base.sass';

import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import { Provider } from 'redux/react';

import routes from './routes';
import redux from './redux';

const history = new BrowserHistory();

const element = (
  <Provider redux={redux}>
    {() => <Router history={history} routes={routes} /> }
  </Provider>
);
React.render(element, document.getElementById('app'));
