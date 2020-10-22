import React from 'react';

export default class ProfileChange extends React.Component {
  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.editMode?
          (<input autoFocus={true} onBlur={this.activateEditMode} value={this.props.status} type="text"/>):
          (<span onDoubleClick={this.deactivateEditMode} >{this.props.status}</span>)}
        </div>
      </div>
    )
  }
}
