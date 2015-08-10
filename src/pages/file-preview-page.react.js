
import React, { Component } from 'react';

export default class FilePreviewPage extends Component {
  render() {

    const url = 'https://softcamp1-my.sharepoint.com/personal/karamon_softcamp1_onmicrosoft_com/_layouts/15/WopiFrame.aspx?sourcedoc={1434e213-7a09-4820-a685-4711666721f8}&action=embedview&wdStartOn=1';
    return (
      <div>
        <iframe
          src={url}
          width='476px'
          height='288px' frameBorder='0'>
          This is an embedded
          <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by
          <a target='_blank' href='http://office.com/webapps'>Office Online</a>.
        </iframe>
      </div>
    );
  }
}



