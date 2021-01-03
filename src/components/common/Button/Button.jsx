import React from "react";
import "./Button.scss";

const Button = ({ children, ...props }) => {
  return (
    <div className="btn ">
      <button {...props}>{children}</button>
    </div>
  );
};

export default Button;
