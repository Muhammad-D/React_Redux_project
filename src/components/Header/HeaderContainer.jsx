import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuth, logOut } from "../../redux/auth-reducer";
import { withRouter } from "react-router-dom";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuth();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
});

let WithUrlDataContainerComponent = withRouter(HeaderContainer);

export default connect(mapStateToProps, { setAuth, logOut })(
  WithUrlDataContainerComponent
);
