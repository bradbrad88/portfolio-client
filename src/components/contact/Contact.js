import React, { useState, useContext } from "react";
import PhoneInput from "react-phone-number-input/input";

import { ModalFormContext } from "contexts/ModalFormContext";
import EmailInput, { validateEmail } from "./EmailInput";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import MessageConfirm from "./MessageConfirm";
import socials from "./socials";
import SocialIcon from "./SocialIcon";
import Button from "components/elements/Button";
import { capitalizeEachWord } from "utils/strings";
import "react-phone-number-input/style.css";
import "stylesheets/Contact.scss";

const Contact = () => {
  const { setModalForm, setLock } = useContext(ModalFormContext);
  const [name, setName] = useState({
    value: "",
    valid: false,
    hintMessage: "",
    hintDisplay: false,
  });
  const [email, setEmail] = useState({
    value: "",
    valid: false,
    hintMessage: "",
    hintDisplay: false,
  });
  const [message, setMessage] = useState({
    value: "",
    valid: false,
    hintMessage: "",
    hintDisplay: false,
  });
  const [phone, setPhone] = useState({
    value: undefined,
    valid: true,
    hintMessage: "",
    hintDisplay: false,
  });
  const onSubmit = e => {
    e.preventDefault();
  };

  const handleInputChange = (value, setState, validator) => {
    const hintMessage = validator(value);
    const valid = !hintMessage;
    const newState = { value, valid, hintMessage, hintDisplay: false };
    setState(newState);
  };

  const handleValidation = (state, setState) => {
    const hintDisplay = !state.valid;
    setState(prevState => ({ ...prevState, hintDisplay }));
  };

  const validateName = value => {
    if (value.length < 2) return "Name should contain more than one character";
    return false;
  };

  const handleNameChange = value => {
    handleInputChange(value, setName, validateName);
  };

  const handleEmailChange = value => {
    handleInputChange(value, setEmail, validateEmail);
  };

  const handlePhoneChange = value => {
    handleInputChange(value, setPhone);
  };

  const handleMessageChange = value => {
    handleInputChange(value, setMessage);
  };

  const handleNameBlur = () => {
    handleValidation(name, setName, validateName);
  };

  const handleEmailBlur = () => {
    handleValidation(email, setEmail, validateEmail);
  };

  const isValid = () => {
    return [name, email].map(state => state.valid).every(el => el === true);
  };

  const onSend = async () => {
    const messageDetails = {
      contactName: capitalizeEachWord(name.value),
      contactEmail: email.value,
      contactPhone: phone.value,
      messageBody: message.value,
    };
    setLock(false);
    setModalForm(<MessageConfirm {...messageDetails} />);
  };

  const renderSocials = () => {
    return socials.map(social => <SocialIcon {...social} />);
  };

  return (
    <form
      className={"contact-form"}
      onSubmit={onSubmit}
      autoComplete="on"
      method="post"
      name="contact-form"
    >
      <div className={"contact-header"}>
        <h2>Get in touch...</h2>
      </div>
      <div className="info">
        <div className="contact-details">
          <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
            {process.env.REACT_APP_EMAIL}
          </a>
          <a href={"tel:+61431154056"}>0431 154 056</a>
        </div>
        <div className="socials">{renderSocials()}</div>
      </div>

      <TextInput
        {...name}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        placeholder={"Your Name *"}
      />
      <EmailInput
        {...email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        placeholder={"Email *"}
      />
      <div className="field">
        <PhoneInput
          className="contact-input"
          onChange={handlePhoneChange}
          placeholder={"Phone"}
          value={phone.value}
          defaultCountry="AU"
          autoComplete={"phone"}
        />
      </div>
      <TextAreaInput
        value={message.value}
        onChange={handleMessageChange}
        placeholder={"Ask a question..."}
        rows={5}
      />
      <Button
        className={"contact-input"}
        text={"Send"}
        onClick={onSend}
        disabled={!isValid()}
      />
    </form>
  );
};

export default Contact;
