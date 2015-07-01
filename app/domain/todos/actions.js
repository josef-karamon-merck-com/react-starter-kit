import alt from '../../alt';

class TodosActions {
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

export default alt.createActions(TodosActions);
