import React from "react";

const TextAreaInput = ({
  value,
  onChange,
  error,
  onBlur,
  placeholder,
  rows = 3,
}) => {
  const handleChange = e => {
    onChange(e.target.value);
  };
  const handleBlur = () => {
    if (!onBlur) return;
    onBlur();
  };
  return (
    <div className="field">
      <textarea
        className={"contact-input"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        rows={rows}
      ></textarea>
      {error && value && <p className="error">{error}</p>}
    </div>
  );
};

export default TextAreaInput;
