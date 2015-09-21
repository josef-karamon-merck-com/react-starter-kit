import React, { Component, PropTypes } from 'react';

function docPreviewUrl(docId) {
  return `https://softcamp1.sharepoint.com/_layouts/15/WopiFrame.aspx?sourcedoc={${docId}}&action=embedview&wdStartOn=1`;
}

export default class FilePreview extends Component {
  static propTypes = {
    docId: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
  }
  render() {
    if (!this.props.docId) {
      return false;
    }
    const width = this.props.width || '100vw';
    const height = this.props.height || '50vh';
    return (
      <iframe
        style={{height: height, width: width, border: 'none'}}
        src={docPreviewUrl(this.props.docId)}
        frameBorder='0'>
          This is an embedded
            <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by
            <a target='_blank' href='http://office.com/webapps'>Office Online</a>.
      </iframe>

    );
  }
}
