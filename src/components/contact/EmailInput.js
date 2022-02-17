import React from "react";

const EmailInput = ({
  value,
  hintMessage,
  hintDisplay,
  onChange,
  onBlur,
  placeholder,
}) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  const handleBlur = () => {
    onBlur();
  };

  return (
    <div className="field">
      <input
        className={"contact-input"}
        placeholder={placeholder}
        value={value}
        autoComplete="email"
        onChange={handleChange}
        onBlur={handleBlur}
        id="email-input"
        name="email"
        type="email"
      ></input>
      {hintDisplay && <p className="error">{hintMessage}</p>}
    </div>
  );
};

export default EmailInput;

export function validateEmail(value) {
  const test = /\S+@\S+\.\S+/.test(value);
  if (!test) return "Not a valid email format";
  return false;
}
