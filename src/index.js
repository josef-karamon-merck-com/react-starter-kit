require('babel/polyfill');

import './assets/styles/bootstrap.sass';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux';
import { AppRoutes } from './app-routes';


class App extends Component {
  render() {
    return (
      <div>
        <ReduxProvider store={store}>
          {() => AppRoutes }
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
