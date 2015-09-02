import React, { Component, PropTypes } from 'react';
import { MyFiles } from 'components';
import * as actionCreators from 'action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


@connect(state => state)
export default class MyFilesPage extends Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);
    return (
      <div>
        <MyFiles actions={actions} {...this.props} />
      </div>
    );
  }
}
