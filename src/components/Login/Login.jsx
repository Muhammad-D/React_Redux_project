import React from "react";
import { Field, reduxForm } from "redux-form";
import { authAPI } from "../../assets/api/api";
import { requiredField } from "../../utilities/validation/validation";
import { InputArea } from "../common/FormsControlers/FormsControlers";

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
            type="text"
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
