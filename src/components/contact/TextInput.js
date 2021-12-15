import React from "react";

const TextInput = ({ value, onChange, error, onBlur, placeholder }) => {
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
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      {error && value && <p className="error">{error}</p>}
    </div>
  );
};

export default TextInput;
