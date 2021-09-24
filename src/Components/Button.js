import React from "react";
import '../Components/Button.css';
const LOAD = [
  "button is-primary is-loading",
  "button is-link is-loading",
  "button is-info is-loading",
  "button is-success is-loading",
  "button is-warning is-loading",
  "button is-danger is-loading",
];
const STYLES = [
  "button is-primary is-rounded",
  "button is-info is-rounded",
  "button is-success is-rounded",
  "button is-danger is-rounded",
  "button is-primary",
  "button is-link",
  "button is-info",
  "button is-success",
  "button is-warning",
  "button is-danger",
  "button is-outlined",
  "button is-primary is-outlined",
  "button is-link is-outlined",
  "button is-info is-outlined",
  "button is-success is-outlined",
  "button is-danger is-outlined",
];

const SIZES = ["button is-small", "button is-medium", "button is-large"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonsize,
  loadStyle,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[6];

  const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[1];

  const checkButtonLoad = LOAD.includes(loadStyle) ? loadStyle : LOAD[3];

  return (
    <>
      <button
        className={` 
      ${checkButtonStyle} ${checkButtonSize} ${checkButtonLoad}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
