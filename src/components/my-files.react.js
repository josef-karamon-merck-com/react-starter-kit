import React, { Component } from 'react';
import { FileList } from 'components';
import { fetchOnUpdate } from 'decorators';
import { transitionTo } from 'redux-react-router';


@fetchOnUpdate([], (params, actions) => {
  actions.getMyFiles('/');
})
export default class MyFiles extends Component {
  folderClicked(folderId) {
    this.props.actions.getMyFiles(`/${folderId}/children`);
  }
  parentClicked(folderId) {
    this.props.actions.getMyFiles('/');
  }
  previewFile(file) {
    const { dispatch } = this.props;
    console.log(file);
    dispatch(transitionTo(`/file/${file.id}/preview`));
  }
  render() {
    if (this.props.myFiles.loading) {
      return (<div>Loading file list ...</div>);
    }
    return (
      <div>
        <FileList
          files={this.props.myFiles.files}
          previewFile={this.previewFile.bind(this)}
          parentClicked={this.parentClicked.bind(this)}
          folderClicked={this.folderClicked.bind(this)}
          />
      </div>
    );
  }
}
