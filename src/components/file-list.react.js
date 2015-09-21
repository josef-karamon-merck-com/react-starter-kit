import React, { Component, PropTypes } from 'react';

export default class FileList extends Component {

  static propTypes = {
    folderClicked: PropTypes.func.isRequired,
    parentClicked: PropTypes.func.isRequired,
    previewFile: PropTypes.func.isRequired,
    fullPreviewFile: PropTypes.func.isRequired,
    deleteFile: PropTypes.func.isRequired
  }

  renderParentReference() {
    if (this.props.files.length === 0) {
      return false;
    }
    const item = this.props.files[0];
    if (!item.parentReference) {
      return false;
    }
    return (
      <div>
        <a onClick={this.props.parentClicked.bind(this, item.parentReference.id)}>
          Showing '{item.parentReference.path}' folder content:
        </a>
      </div>
    );
  }
  renderFile(file) {
    return (
      <li key={file.id}>
        <a onClick={this.props.previewFile.bind(this, file)}>
          {file.name} {file.size}
        </a>
        <span>
          <a onClick={this.props.fullPreviewFile.bind(this, file)}>Full Preview</a>
          <a onClick={this.props.deleteFile.bind(this, file)}>Delete</a>
        </span>
      </li>
    );
  }
  renderFolder(folder) {
    if (folder.childCount === 0) {
      return (
        <li key={folder.id}><span>{folder.name}</span> (empty)</li>
      );
    }
    return (
      <li key={folder.id}>
        <a onClick={this.props.folderClicked.bind(this, folder.id)}>{folder.name}</a>
        ({folder.childCount})
      </li>
    );
  }
  renderItem(item) {
    if (item.type === 'Folder') {
      return this.renderFolder(item);
    }
    else {
      return this.renderFile(item);
    }
  }
  render() {
    return (
      <div>
        {this.renderParentReference()}
        <ol>
          {this.props.files.map(this.renderItem.bind(this))}
        </ol>
      </div>
    );
  }
}
