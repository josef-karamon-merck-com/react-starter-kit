import React, { Component } from 'react';
import { FileList, FilePreview } from 'components';
import { fetchOnUpdate } from 'decorators';
import { transitionTo } from 'redux-react-router';


@fetchOnUpdate(['path'], (params, actions) => {
  actions.getSharePointFiles(params.path);
})
export default class SharePointFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  previewFile(file) {
    this.setState({ previewFileId: file.id });

  }
  deleteFile(file) {
    this.props.actions.deleteSharePointFile(file.serverUrl);
  }
  fullPreviewFile(file) {
    const { dispatch } = this.props;
    dispatch(transitionTo(`/file/${file.id}/preview`));

  }
  render() {
    if (this.props.loading) {
      return (<div>Loading file list ...</div>);
    }
    return (
      <div>
        <FileList
          files={this.props.files}
          previewFile={this.previewFile.bind(this)}
          fullPreviewFile={this.fullPreviewFile.bind(this)}
          deleteFile={this.deleteFile.bind(this)}
          parentClicked={()=>{}}
          folderClicked={()=>{}}
          />
        <FilePreview docId={this.state.previewFileId} />
      </div>
    );
  }
}
