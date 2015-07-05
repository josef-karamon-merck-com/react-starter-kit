/* @flow */

import React from 'react';
import AltContainer from 'alt/AltContainer';
import Header from '../Header';
// import connectToStores from 'alt/utils/connectToStores';
import TodoStore from '../../domain/todos/store';
import TodoList from '../../domain/todos/TodoList.react';
import TodoActions from '../../domain/todos/actions';
import TodoTextInput from '../../domain/todos/TodoTextInput.react';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style.sass';


export class Application extends React.Component {

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll = () => {
    TodoActions.toggleCompleteAll();
  }

  render() {
    console.log(this.props);
    return (<div className={styles.main}>
      <div className={styles.wrap}>
        <Header />

        <main className={styles.body}>
          <h1>todos</h1>
          <TodoTextInput
            id="new-todo"
            placeholder="What needs to be done?"
            onSave={this._onSave}
          />
          <br />
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

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave = (text) => {
    if (text.trim()){
      TodoActions.create(text);
    }
  }
}

export default class ApplicationConatainer {
  render() {
    return (
      <AltContainer stores={[ TodoStore ]} inject={
        {
          areAllComplete: () => TodoStore.areAllComplete(),
          todos: () => TodoStore.getState().todos
        }
      }>
        <Application />
      </AltContainer>
    );
  }
}
