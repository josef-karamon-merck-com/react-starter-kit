import React from 'react';
import { dispatch } from '../../redux';

import * as actions from './actions';

export default class TodoCreate extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    console.log('TodoCreate %O', this.props);
    return (
      <div>
        <button onClick={
          () => dispatch(actions.create('houii'))
        }>save</button>
      </div>
    );
  }
}
