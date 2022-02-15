import React from "react";
import "stylesheets/Main.scss";

const Button = ({ text, onClick, disabled, className }) => {
  return (
    <button className={`button ${className}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
