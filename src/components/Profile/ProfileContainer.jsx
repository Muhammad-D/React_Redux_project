import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import Axios from "axios";
import { setUserProfile } from "./../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
      (response) => {
        this.props.setUserProfile(response.data);
      }
    );
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
