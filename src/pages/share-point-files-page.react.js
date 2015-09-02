import React, { Component, PropTypes } from 'react';
import { SharePointFiles } from 'components';
import * as actionCreators from 'action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


@connect(state => state)
export default class SharePointFilesPage extends Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);
    return (
      <div>
        <SharePointFiles actions={actions} {...this.props} />
      </div>
    );
  }
}
