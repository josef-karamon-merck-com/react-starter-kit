import React, { Component } from 'react';
import * as actionCreators from 'action-creators/share-point-files';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => state)

export default class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);
    actions.getSharePointFiles();
  }

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}
