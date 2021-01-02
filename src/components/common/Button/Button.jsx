import React from "react";
import "./Button.scss";

const Button = ({ children, textAlign }) => {
  return (
    <div className="btn ">
      <button>{children}</button>
    </div>
  );
};

export default Button;
