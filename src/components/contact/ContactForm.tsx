import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import useFetch, { Req } from "hooks/useFetch";
import TextInput from "components/elements/TextInput";
import { capitalizeEachWord } from "utils/strings";
import "stylesheets/Contact.scss";

interface InputState {
  value: string;
  valid: boolean;
  hintMessage: string;
  hintDisplay: boolean;
}

type Validator = (val: string) => string;

const ContactForm = () => {
  const { postRequest, working } = useFetch();
  const [name, setName] = useState<InputState>({
    value: "",
    valid: false,
    hintMessage: "",
    hintDisplay: false,
  });
  const [email, setEmail] = useState<InputState>({
    value: "",
    valid: false,
    hintMessage: "",
    hintDisplay: false,
  });
  const [message, setMessage] = useState<InputState>({
    value: "",
    valid: true,
    hintMessage: "",
    hintDisplay: false,
  });
  const [phone, setPhone] = useState<InputState>({
    value: "",
    valid: true,
    hintMessage: "",
    hintDisplay: false,
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (working) return;
    const messageDetails = {
      contactName: capitalizeEachWord(name.value),
      contactEmail: email.value,
      contactPhone: phone.value,
      messageBody: message.value,
    };
    const req: Req = {
      url: "new_message",
      data: messageDetails,
    };
    postRequest(req);
  };

  const handleInputChange = (
    value: string,
    setState: (val: InputState) => void,
    validator: Validator
  ) => {
    const hintMessage = validator(value);
    const valid = !hintMessage;
    const newState = { value, valid, hintMessage, hintDisplay: false } as InputState;
    setState(newState);
  };

  const handleValidation = (state: InputState, setState: (val: any) => void) => {
    const hintDisplay = !state.valid;
    setState((prevState: InputState) => ({ ...prevState, hintDisplay }));
  };

  const validateName: Validator = value => {
    if (value.length < 2) return "Name should contain more than one character";
    return "";
  };

  const validateEmail: Validator = value => {
    const test = /\S+@\S+\.\S+/.test(value);
    if (!test) return "Not a valid email format";
    return "";
  };

  const handleNameChange = (value: string) => {
    handleInputChange(value, setName, validateName);
  };

  const handleEmailChange = (value: string) => {
    handleInputChange(value, setEmail, validateEmail);
  };

  const handlePhoneChange = (value: string) => {
    handleInputChange(value, setPhone, () => "");
  };

  const handleMessageChange = (value: string) => {
    handleInputChange(value, setMessage, () => "");
  };
  const isValid = () => {
    return [name, email].map(state => state.valid).every(el => el === true);
  };

  return (
    <>
      <form id="contactForm" name="contactForm" autoComplete="on" onSubmit={onSubmit}>
        <TextInput
          value={name.value}
          hintMessage={name.hintMessage}
          hintDisplay={name.hintDisplay}
          placeholder="* Preferred Name"
          autocomplete="name"
          onChange={handleNameChange}
          onBlur={() => handleValidation(name, setName)}
        />
        <TextInput
          value={email.value}
          hintMessage={email.hintMessage}
          hintDisplay={email.hintDisplay}
          placeholder="* Email Address"
          onChange={handleEmailChange}
          type="email"
          autocomplete="email"
          onBlur={() => handleValidation(email, setEmail)}
        />
        <TextInput
          value={phone.value}
          hintMessage={phone.hintMessage}
          hintDisplay={phone.hintDisplay}
          placeholder="Phone Number (not required)"
          onChange={handlePhoneChange}
          type="tel"
          autocomplete="tel"
          onBlur={() => handleValidation(phone, setPhone)}
        />
        <TextInput
          value={message.value}
          hintMessage={message.hintMessage}
          hintDisplay={message.hintDisplay}
          placeholder="Message"
          onChange={handleMessageChange}
          type="tel"
          autocomplete="tel"
          area={true}
          onBlur={() => handleValidation(message, setMessage)}
        />
        <p>
          <button type="submit" disabled={!isValid()}>
            {working ? (
              <PropagateLoader
                size={18}
                color={"#fff5"}
                cssOverride={{ display: "block", height: "20px" }}
              />
            ) : (
              "Send Message"
            )}
          </button>
        </p>
      </form>
    </>
  );
};

export default ContactForm;
