import React, { useState, useRef } from "react";
import { Ripple } from "react-spinners-css";

import PhoneInput, {
  formatPhoneNumber,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input/input";
import EmailInput, { validateEmail } from "./EmailInput";
import TextInput from "./TextInput";
import "react-phone-number-input/style.css";
import "stylesheets/Contact.scss";
import TextAreaInput from "./TextAreaInput";

const Contact = () => {
  const [name, setName] = useState({ value: "", valid: false, error: false });
  const [email, setEmail] = useState({ value: "", valid: false, error: false });
  const [message, setMessage] = useState({ value: "", valid: false, error: false });
  const [phone, setPhone] = useState({
    value: undefined,
    valid: true,
    error: false,
  });
  const [working, setWorking] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    // console.log("e", e.serialize());
  };

  const handleInputChange = (value, setState) => {
    const newState = { value, error: false, valid: false };
    setState(newState);
  };

  const handleValidation = (value, setState, validator) => {
    const error = validator(value);
    const valid = !error;
    const newState = {
      value,
      error,
      valid,
    };
    setState(newState);
  };

  const validateName = value => {
    if (value.length < 2) return "Name should contain more than one character";
    return false;
  };

  // const validateEmail = value => {
  //   const test = /\S+@\S+\.\S+/.test(value);
  //   if (!test) return "Not a valid email format";
  //   return false;
  // };

  const validatePhone = () => {
    // if (phone.length > 0 && phone.length < 10)
    //   return "Phone number should be 10 characters (mobile only please) * Not essential, leave blank if desired";
    // if (phone.length > 10)
    //   return "Too many digits, should be 10 (mobile only please)";
    // return false;
    return false;
  };

  const validateMessage = () => {
    return true;
  };

  const handleNameChange = value => {
    handleInputChange(value, setName);
  };

  const handleEmailChange = value => {
    handleInputChange(value, setEmail);
  };

  // const handlePhoneChange = e => {
  //   let sel = e.target.selectionStart;
  //   if (sel === 4 || sel === 8) sel++;
  //   console.log("sel", sel);
  //   const val = e.target.value.replace(/[^0-9.]/g, "");
  //   handleInputChange(val, phone, setPhone);
  //   setTimeout(() => {
  //     e.target.setSelectionRange(sel, sel);
  //   }, 10);
  // };

  const handlePhoneChange = value => {
    handleInputChange(value, setPhone);
  };

  const handleMessageChange = value => {
    handleInputChange(value, setMessage);
  };

  const handleNameBlur = () => {
    handleValidation(name.value, setName, validateName);
  };

  const handleEmailBlur = () => {
    handleValidation(email.value, setEmail, validateEmail);
  };

  const handlePhoneBlur = () => {
    handleValidation(phone.value, setPhone, validatePhone);
  };

  const isValid = () => {
    return [name, email].map(state => state.valid).every(el => el === true);
  };

  const onSend = async () => {
    console.log("its happening");
    if (!process.env.REACT_APP_API_HOST) {
      return console.error("Missing REACT_APP_API_HOST environment variable");
    }
    setWorking(true);
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      const data = new URLSearchParams();
      data.append("name", name.value);
      data.append("email", email.value);
      data.append("phone", phone.value);
      data.append("message", message.value);
      const options = {
        headers,
        body: data.toString(),
        method: "POST",
      };
      const url = process.env.REACT_APP_API_HOST + "/sendemail";
      console.log(url);
      const res = await fetch(url, options);
      setWorking(false);
    } catch (error) {
      setWorking(false);
    }
  };

  return (
    <form className={"contact-form"} onSubmit={onSubmit} autoComplete="on">
      <div className={"contact-header"}>
        <h2>Get in touch...</h2>
      </div>
      <a href={"mailto:brad.s.teague@gmail.com"}>brad.s.teague@gmail.com</a>
      <a href={"tel:+61431154056"}>0431 154 056</a>

      <TextInput
        value={name.value}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        placeholder={"Name *"}
        error={name.error}
      />
      <EmailInput
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={email.error}
        value={email.value}
      />
      <div className="field">
        <PhoneInput
          className="contact-input"
          onChange={handlePhoneChange}
          placeholder={"Phone"}
          value={phone.value}
          defaultCountry="AU"
          autoComplete
        />
      </div>
      <TextAreaInput
        value={message.value}
        onChange={handleMessageChange}
        placeholder={"Ask a question..."}
        rows={5}
      />
      <button
        className={"contact-input button"}
        disabled={!isValid()}
        onClick={onSend}
      >
        {working ? <Ripple color={"#000"} size={30} /> : "Send"}
      </button>
    </form>
  );
};

export default Contact;
