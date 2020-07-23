import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import Axios from "axios";
import { setUserProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../assets/api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    profileAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
