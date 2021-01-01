import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updataStatus(this.state.status);
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    if (this.props.isFetching) {
      return <Preloader />;
    }
    return (
      <div>
        <div>
          {this.state.editMode ? (
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              type="text"
            />
          ) : (
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "-----"}
            </span>
          )}
        </div>
      </div>
    );
  }
}
