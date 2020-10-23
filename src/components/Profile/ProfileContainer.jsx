import React from "react";
import style from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUser,
  getStatus,
  updataStatus,
} from "./../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import WithAuthReddirect from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUser(this.props.match.params.userId);
    this.props.getStatus(this.props.match.params.userId);
  }
  render() {
    return (
      <>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updataStatus={this.props.updataStatus}
          userId={this.props.match.params.userId}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isFetching: state.profilePage.isFetching,
  isAuth: state.auth.isAuth,
});

// let AuthRedirectComponent = WithAuthReddirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
  withRouter,
  connect(mapStateToProps, { setUser, getStatus, updataStatus })
)(ProfileContainer);
