import React from 'react';
import { Router, Route } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';
import History from 'react-router/lib/BrowserHistory';
import { Layout, SharePointFilesPage, HomePage, FilePreviewPage } from './pages';
import { sessionSettings } from 'utils';
const history = new History();
import { store } from './redux';

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
  sessionSettings.sharePointToken = token;
  window.location = sessionSettings.returnUrl || '/';
}


export const AppRoutes = (
  <Router history={history}>
    <Route component={reduxRouteComponent(store)}>
      <Route component={Layout} >
        <Route path="/" component={HomePage} />
        <Route path="sharepoint-files/:path" component={SharePointFilesPage} />
        <Route name="file-preview" path="file/:id/preview" component={FilePreviewPage} />
        <Route path="/auth/callback/*" onEnter={oauthCallbackEntered} />
      </Route>
    </Route>
  </Router>
);
