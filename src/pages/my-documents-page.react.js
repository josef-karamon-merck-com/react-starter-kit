import React, { Component, PropTypes } from 'react';
import { MyDocuments } from 'components';
import * as myDocumentsActions from 'action-creators/my-documents';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


@connect(state => ({
  myDocuments: state
}))
export default class MyDocumentsPage extends Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch } = this.props;
    const actions = window.actions = bindActionCreators(myDocumentsActions, dispatch);
    return (
      <div>
        <MyDocuments actions={actions} />
      </div>
    );
  }
}
