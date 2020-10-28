import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { authAPI } from "../../assets/api/api";
import { requiredField } from "../../utilities/validation/validation";
import { InputArea } from "../common/FormsControlers/FormsControlers";
import { logIn } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder="Login"
            name="email"
            type="text"
            component={InputArea}
            validate={[requiredField]}
          />
        </div>
        <div>
          <Field
            placeholder="Password"
            name="password"
            type="password"
            component={InputArea}
            validate={[requiredField]}
          />
        </div>
        <div>
          <Field
            type="checkbox"
            name="rememberMe"
            component={InputArea}
            validate={[requiredField]}
          />
          {"remember me"}
        </div>
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
