import React from "react";
import style from "./FormsControlers.module.css";

const ValidationTemplate = ({ meta, children }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${style.formControl} ${hasError && style.error}`}>
      {children}
      {hasError && <span>{meta.error}</span>}
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
