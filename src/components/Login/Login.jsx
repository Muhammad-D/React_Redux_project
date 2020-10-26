import React from "react";
import { Field, reduxForm } from "redux-form";
import { authAPI } from "../../assets/api/api";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder="Login"
            name="email"
            type="text"
            component="input"
          />
        </div>
        <div>
          <Field
            placeholder="Password"
            name="password"
            type="text"
            component="input"
          />
        </div>
        <div>
          <Field type="checkbox" name="rememberMe" component="input" /> remember
          me
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
    authAPI.signIn(formData);
  };

  render() {
    return (
      <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={this.reduxOnSubmit} />
      </>
    );
  }
}

export default Login;
