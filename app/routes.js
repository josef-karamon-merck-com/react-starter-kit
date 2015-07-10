import React from 'react';
import { Route, Redirect } from 'react-router';
import Application from 'components/application';
import { TodoList, TodoCreate } from 'components/todos';


export default (
  <Route name="app" path="/" component={Application}>
    <Route path="todos/create" component={TodoCreate} />
    <Route path="todos/:filter" component={TodoList} />
    <Redirect from="todos" to="todos/pending" />
  </Route>
);
