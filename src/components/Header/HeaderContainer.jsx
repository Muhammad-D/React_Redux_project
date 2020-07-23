import React from "react";
import style from "./Header.module.css";
import Header from "./Header";
import Axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { withRouter } from "react-router-dom";

class HeaderContainer extends React.Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
      withCredentials: true,
    }).then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

let WithUrlDataContainerComponent = withRouter(HeaderContainer);

export default connect(mapStateToProps, { setAuthUserData })(
  WithUrlDataContainerComponent
);