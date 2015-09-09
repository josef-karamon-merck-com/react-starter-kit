import React, { Component } from 'react';
import { FileList } from 'components';
import { fetchOnUpdate } from 'decorators';


@fetchOnUpdate(['path'], (params, actions) => {
  actions.getSharePointFiles(params.path);
})
export default class SharePointFiles extends Component {
  previewFile(file) {
    console.log(file);
  }
  render() {
    if (this.props.sharePointFiles.loading) {
      return (<div>Loading file list ...</div>);
    }
    return (
      <div>
        <FileList
          files={this.props.sharePointFiles.files}
          previewFile={this.previewFile.bind(this)}
          parentClicked={()=>{}}
          folderClicked={()=>{}}
          />
      </div>
    );
  }
}
