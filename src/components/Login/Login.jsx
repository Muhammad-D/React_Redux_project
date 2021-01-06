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

import style from "./../common/FormsControlers/FormsControlers.module.css";
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
          <FieldCreater
            placeholder="Login"
            name="email"
            component={InputArea}
            validate={[requiredField]}
            props={{ type: "text" }}
          />
        </div>
        <div className="login__input-wrapper">
          <span className="login__icon">
            <LockOpenIcon />
          </span>
          <FieldCreater
            placeholder="Password"
            name="password"
            component={InputArea}
            validate={[requiredField]}
            props={{ type: "password" }}
          />
        </div>
        <label className="login__checkbox-label">
          {" "}
          <FieldCreater
            name="rememberMe"
            component={InputArea}
            type="checkbox"
            props={{ type: "checkbox" }}
          />{" "}
          <span>Remember</span>
        </label>

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && (
          <FieldCreater
            placeholder="Enter text you see in pop-window"
            name="captcha"
            component={InputArea}
            validate={[requiredField]}
            props={{ type: "text" }}
          />
        )}
        {error && <div className={style.errorForm}>{error}</div>}
        <div>
          <button>LogIn</button>
        </div>
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
          <p className="login__text">Join us us today</p>
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
