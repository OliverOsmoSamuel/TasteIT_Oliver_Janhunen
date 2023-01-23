import React from "react";
import "./Button.scss";

const Button = ({ type, onClick, children, variant }) => {
  return (
    <button className={variant === "small" ? "button--small button" : "button"}>
      {children}
    </button>
  );
};

export default Button;
