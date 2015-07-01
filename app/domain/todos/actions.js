import alt from '../../alt';

class TodoActions {
  constructor() {
    this.generateActions(
      'create',
      'updateText',
      'toggleComplete',
      'toggleCompleteAll',
      'destroy',
      'destroyCompleted'
    );
  }
}

export default alt.createActions(TodoActions);
