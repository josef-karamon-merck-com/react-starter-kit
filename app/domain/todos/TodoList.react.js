/* @flow */

import React from 'react';
import TodoActions from './actions';
import TodoItem from './TodoItem.react';
import _ from 'lodash';


export default class TodoList {

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll = () => {
    TodoActions.toggleCompleteAll();
  }

  render() {
    // This section should be hidden by default
    // and shown when there are todos.
    if (_.size(this.props.todos) < 1) { return null; }

    const todos = _.map(this.props.todos, (todo, key) => <TodoItem key={key} todo={todo} />);

    return (
      <ul id="todo-list">{todos}</ul>
    );
  }
}
