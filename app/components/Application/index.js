/* @flow */

import React from 'react';
import Header from '../Header';
import connectToStores from 'alt/utils/connectToStores';
import ArticlesStore from '../../domain/articles/store';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style.sass';

@connectToStores
export default class Application extends React.Component {

  static getStores() {
    return [ArticlesStore];
  }

  static getPropsFromStores() {
    return ArticlesStore.getState();
  }

  render() {
    return (<div className={styles.main}>
      <div className={styles.wrap}>
        <Header />

        <main className={styles.body}>
          <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
        </main>
      </div>
    </div>);
  }
}
