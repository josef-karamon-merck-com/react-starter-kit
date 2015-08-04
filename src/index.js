require('babel/polyfill');

import './assets/styles/bootstrap.sass';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import History from 'react-router/lib/BrowserHistory';
import { reduxRouteComponent } from 'redux-react-router';
import { Provider as ReduxProvider } from 'react-redux';
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { store } from './redux';
import { Layout, AboutPage, MyDocumentsPage, HomePage } from './pages';

const history = new History();

function urlToArray(urlHash) {
  let request = {};
  let pairs = urlHash.split('&');
  for (let i = 0; i < pairs.length; i++) {
    if (!pairs[i]) {
      continue;
    }
    let pair = pairs[i].split('=');
    request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return request;
}

function oauthCallbackEntered() {
  const data = urlToArray(window.location.hash.replace(/^#/, ''));
  const token = data.access_token;
  sessionStorage.setItem('O365_ACCESS_TOKEN', token);
  console.log(token);
}


class App extends Component {
  render() {
    return (
      <div>
        <ReduxProvider store={store}>
          {() => {
            return (
              <Router history={history}>
                <Route component={reduxRouteComponent(store)}>
                  <Route component={Layout} >
                    <Route path="/" component={HomePage} />
                    <Route path="my-documents" component={MyDocumentsPage} />
                    <Route path="about" component={AboutPage} />
                    <Route path="/auth/callback/*" onEnter={oauthCallbackEntered} />
                  </Route>
                </Route>
              </Router>
            );
          }}
        </ReduxProvider>
        {/*<DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>*/}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
