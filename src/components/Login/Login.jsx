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

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldCreater
          placeholder="Login"
          name="email"
          component={InputArea}
          validate={[requiredField]}
          props={{ type: "text" }}
        />
        <FieldCreater
          placeholder="Password"
          name="password"
          component={InputArea}
          validate={[requiredField]}
          props={{ type: "password" }}
        />
        <FieldCreater
          name="rememberMe"
          component={InputArea}
          type="checkbox"
          props={{ type: "checkbox" }}
          text="remember me"
        />
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
      <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={this.reduxOnSubmit} />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { logIn })(Login);
