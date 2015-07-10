import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as actions from './actions';


export class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.array
  }

  render() {
    console.log('TodoList: %O', this.props);
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    );
  }
}


@connect(state => ({ todos: state.todos }))
export default class TodoListContainer extends React.Component {

  render() {
    console.log('TodoListContainer: %O', this.props);
    const props = {
      todos: this.props.todos,
      ...bindActionCreators(actions, this.props.dispatch)
    };
    return (
      <TodoList {...props} />
    );
  }
}

