/* @flow */

import React, { PropTypes } from 'react';


const ENTER_KEY_CODE = 13;

export default class extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { value: props.value || '' };
  }

  render() {
    return (
      <input
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save = () => {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  _onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  _onKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }
}
