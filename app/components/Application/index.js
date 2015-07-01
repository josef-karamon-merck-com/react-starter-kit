/* @flow */

import React from 'react';
import Header from '../Header';
import connectToStores from 'alt/utils/connectToStores';
import TodosStore from '../../domain/todos/store';
import TodosList from '../../domain/todos/TodosList.react.js';

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
    return [TodosStore];
  }

  static getPropsFromStores() {
    return TodosStore.getState();
  }

  render() {
    // console.log(this.props);
    return (<div className={styles.main}>
      <div className={styles.wrap}>
        <Header />

        <main className={styles.body}>
          <TodosList todos={this.props.todos} />
          <br />
          <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
        </main>
      </div>
    </div>);
  }
}
