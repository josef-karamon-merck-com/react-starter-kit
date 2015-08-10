import React, { Component, PropTypes } from 'react';
import { MyFiles } from 'components';
import * as myFilesActions from 'action-creators/my-files';
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
    const actions = bindActionCreators(myFilesActions, dispatch);
    return (
      <div>
        <MyFiles actions={actions} {...this.props} />
      </div>
    );
  }
}
