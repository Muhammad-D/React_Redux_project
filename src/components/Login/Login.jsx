import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { authAPI } from "../../assets/api/api";
import { requiredField } from "../../utilities/validation/validation";
import {
  FieldCreater,
  InputArea,
} from "../common/FormsControlers/FormsControlers";
import { logIn } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

import "./../common/FormsControlers/FormsControlers.scss";
import "./Login.scss";

import logo from "../../assets/images/logo-icon.svg";

import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__input-wrapper">
          <span className="login__icon">
            <PersonIcon />
          </span>
          <Field
            placeholder="Login"
            name="email"
            component={InputArea}
            validate={[requiredField]}
            type="text"
          />
        </div>
        <div className="login__input-wrapper">
          <span className="login__icon">
            <LockOpenIcon />
          </span>
          <Field
            placeholder="Password"
            name="password"
            component={InputArea}
            validate={[requiredField]}
            type="password"
          />
        </div>
        <label className="login__checkbox-label">
          {" "}
          <Field
            name="rememberMe"
            component={InputArea}
            type="checkbox"
            type="checkbox"
          />{" "}
          <span>Remember</span>
        </label>

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && (
          <Field
            placeholder="Enter text you see in pop-window"
            name="captcha"
            component={InputArea}
            validate={[requiredField]}
            type="text"
          />
        )}
        {/* {error && <div className="errorForm">{error}</div>} */}
        <button className="login__btn">Log into your account</button>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

class Login extends React.Component {
  reduxOnSubmit = (formData) => {
    this.props.logIn(formData);
  };

  render() {
    return this.props.isAuth ? (
      <Redirect to="/profile" />
    ) : (
      <div className="login">
        <section className="login__wrapper">
          <img src={logo} alt="logo" className="login__logo" />
          <h1 className="login__title">Welcome</h1>
          <p className="login__text">Join us today</p>
          <LoginReduxForm
            onSubmit={this.reduxOnSubmit}
            captchaUrl={this.props.captchaUrl}
          />
        </section>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { logIn })(Login);
