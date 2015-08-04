import React, { Component } from 'react';
import { FileList } from 'components';
import { fetchOnUpdate } from 'decorators';


@fetchOnUpdate([], (params, actions) => {
  actions.getMyDocuments();
})
export default class MyDocuments extends Component {

  render() {
    return (
      <div>
        <FileList />
      </div>
    );
  }
}
