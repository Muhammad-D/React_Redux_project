import React from "react";
import style from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUser } from "./../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUser(this.props.match.params.userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;

    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUser })(
  WithUrlDataContainerComponent
);
