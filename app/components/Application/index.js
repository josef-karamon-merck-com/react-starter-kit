/* @flow */

import React from 'react';
import Header from '../Header';
import connectToStores from 'alt/utils/connectToStores';
import TodoStore from '../../domain/todos/store';
import TodoList from '../../domain/todos/TodoList.react';
import TodoActions from '../../domain/todos/actions';

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
    return [TodoStore];
  }

  static getPropsFromStores() {
    return TodoStore.getState();
  }

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll = () => {
    TodoActions.toggleCompleteAll();
  }

  render() {
    // console.log(this.props);
    return (<div className={styles.main}>
      <div className={styles.wrap}>
        <Header />

        <main className={styles.body}>
          <input
            id="toggle-all"
            type="checkbox"
            onChange={this._onToggleCompleteAll}
            checked={this.props.areAllComplete ? 'checked' : ''}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList todos={this.props.todos} />

          <br />
          <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
        </main>
      </div>
    </div>);
  }
}
