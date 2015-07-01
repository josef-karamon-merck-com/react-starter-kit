import alt from '../../alt';
import TodoActions from './actions';
import _ from 'lodash';


const todoStore = alt.createStore(class TodoStore {
  constructor() {
    this.bindActions(TodoActions);

    this.todos = {};

    this.dispatcher.register(function (payload) {
      // debugging
      console.log(payload);
    });

    this.exportPublicMethods({
      areAllComplete: this.areAllComplete
    });
  }

  update(id, updates) {
    if(this.todos[id] && updates){
      this.todos[id] = _.merge(this.todos[id], updates);
    }
  }

  updateAll(updates) {
    _.forEach(this.todos, (todo, id) => {
      this.update(id, updates);
    });
  }

  onCreate(text) {
    text = text.trim();
    if (text === '') {
      return false;
    }

    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.todos[id] = {
      id: id,
      complete: false,
      text: text
    };
  }

  onUpdateText(x) {
    let { id, text } = x;

    text = text ? text.trim() : '';
    if (text === '') {
      return false;
    }
    this.update(id, { text });
  }

  onToggleComplete(id) {
    const complete = !this.todos[id].complete;
    this.update(id, { complete });
  }

  onToggleCompleteAll() {
    const complete = !todoStore.areAllComplete();
    this.updateAll({ complete });
  }

  onDestroy(id) {
    delete this.todos[id];
  }

  onDestroyCompleted() {
    _.forEach(this.todos, (todo, id) => {
      if (todo.complete) { this.onDestroy(id); }
    });
  }

  areAllComplete() {
    const { todos } = this.getState();
    for (let id in todos) {
      if (!todos[id].complete) {
        return false;
      }
    }
    return true;
  }
});

export default todoStore;
