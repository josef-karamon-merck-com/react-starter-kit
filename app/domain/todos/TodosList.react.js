/* @flow */

import React from 'react';
import TodosActions from './actions';


export default class {

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll = () => {
    TodosActions.toggleCompleteAll();
  }

  render() {
    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.todos).length < 1) {
      return null;
    }

    const todos = [];

    for (let key in this.props.todos) {
      // todos.push(<TodoItem key={key} todo={todos[key]} />);
    }

    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }
}
