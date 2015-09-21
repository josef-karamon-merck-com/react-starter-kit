import React, { Component } from 'react';
import { FilePreview } from 'components';

export default class FilePreviewPage extends Component {
  render() {
    return (
      <div>
        <FilePreview docId={this.props.routeParams.id} />
      </div>
    );
  }
}



