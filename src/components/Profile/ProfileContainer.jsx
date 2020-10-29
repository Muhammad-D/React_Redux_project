import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUser,
  getStatus,
  updataStatus,
} from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import WithAuthReddirect from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.userId;
    this.props.setUser(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updataStatus={this.props.updataStatus}
          userId={this.props.userId}
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
  userId: state.auth.id,
});

// let AuthRedirectComponent = WithAuthReddirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
  WithAuthReddirect,
  withRouter,
  connect(mapStateToProps, { setUser, getStatus, updataStatus })
)(ProfileContainer);
