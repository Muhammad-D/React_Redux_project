import React from "react";

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updataStatus(this.state.status);
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.editMode ? (
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.activateEditMode}
              value={this.state.status}
              type="text"
            />
          ) : (
            <span onDoubleClick={this.deactivateEditMode}>
              {this.props.status || "-----"}
            </span>
          )}
        </div>
      </div>
    );
  }
}
