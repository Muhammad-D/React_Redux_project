import React from "react";
import { Field } from "redux-form";
import "./FormsControlers.scss";

import cn from "classnames";

const ValidationTemplate = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <label
      className={cn("form-controler", { "form-controler_has-error": hasError })}
    >
      {children}
      {hasError && (
        <span className="form-controler__error-message">{error}</span>
      )}
    </label>
  );
};

export const TextArea = ({ input, ...props }) => {
  return (
    <ValidationTemplate {...props}>
      <textarea className="form-controler__textarea" {...input} {...props} />
    </ValidationTemplate>
  );
};

export const InputArea = ({ input, ...props }) => {
  return (
    <ValidationTemplate {...props}>
      <input className="form-controler__input" {...input} {...props} />
    </ValidationTemplate>
  );
};

export const FieldCreater = ({
  placeholder,
  name,
  component,
  validate,
  props = {},
  text,
}) => {
  return (
    <>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validate}
        {...props}
      />
      {text}
    </>
  );
};
