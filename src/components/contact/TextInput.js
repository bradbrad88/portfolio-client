import React from "react";

const TextInput = ({
  value,
  placeholder,
  hintMessage,
  hintDisplay,
  onChange,
  onBlur,
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
        className="contact-input name"
        name="name"
        autocomplete="name"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      {hintDisplay && <p className="error">{hintMessage}</p>}
    </div>
  );
};

export default TextInput;
