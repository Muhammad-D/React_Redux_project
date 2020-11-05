import React from "react";
import { Field } from "redux-form";
import style from "./FormsControlers.module.css";

const ValidationTemplate = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={`${style.formControl} ${hasError && style.error}`}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = ({ input, ...props }) => {
  return (
    <ValidationTemplate {...props}>
      <textarea {...input} {...props} />
    </ValidationTemplate>
  );
};

export const InputArea = ({ input, ...props }) => {
  return (
    <ValidationTemplate {...props}>
      <input {...input} {...props} />
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
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validate}
        {...props}
      />
      {text}
    </div>
  );
};
