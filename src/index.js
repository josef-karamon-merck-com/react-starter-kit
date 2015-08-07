require('babel/polyfill');

import './assets/styles/base.sass';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import History from 'react-router/lib/BrowserHistory';
import { reduxRouteComponent } from 'redux-react-router';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux';
import { Layout, AboutPage, MyFilesPage, HomePage, FilePreviewPage } from './pages';
import { sessionSettings } from 'utils';

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
  sessionSettings.o365Token = token;
  console.log(token);
  window.location = '/my-files';
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
                    <Route path="my-files" component={MyFilesPage} />
                    <Route name="file-preview" path="file/:id/preview" component={FilePreviewPage} />
                    <Route path="about" component={AboutPage} />
                    <Route path="/auth/callback/*" onEnter={oauthCallbackEntered} />
                  </Route>
                </Route>
              </Router>
            );
          }}
        </ReduxProvider>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
