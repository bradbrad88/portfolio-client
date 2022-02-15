import React, { useContext, useEffect } from "react";
import { Ripple } from "react-spinners-css";
import useMessage from "hooks/useMessage";
import { ModalFormContext } from "contexts/ModalFormContext";
import Button from "components/elements/Button";
import "stylesheets/Contact.scss";

const MessageConfirm = ({
  contactName,
  contactPhone,
  contactEmail,
  messageBody,
}) => {
  const { lock, setLock, setModalForm } = useContext(ModalFormContext);
  const { working, sendMessage, success, failure } = useMessage();
  // if (lock !== working) setLock(working);
  useEffect(() => {
    setLock(working);
  }, [working]);
  const onClick = () => {
    sendMessage({ contactName, contactEmail, contactPhone, messageBody });
  };
  return (
    <div className={`message scene`}>
      <div className={`three-d-card ${success && "success"}`}>
        <div className={"face confirm"}>
          <h2>
            {working
              ? "Sending..."
              : failure
              ? "Sending failed"
              : "Send this message?"}
          </h2>
          <div className="label">Name</div>
          <div className="data">{contactName}</div>
          <div className="label">Email</div>
          <div className="data">{contactEmail}</div>
          <div className="label">Phone</div>
          <div className="data">{contactPhone ? contactPhone : "Not Provided"}</div>
          <div className="label">Message</div>
          <div className="data">{messageBody}</div>
          {/* <button disabled={working} className="send" onClick={onClick}>
            {working ? <Ripple color={"#000"} size={30} /> : "SEND"}
          </button> */}
          <Button
            disabled={working}
            className={"send"}
            onClick={onClick}
            text={
              working ? (
                <Ripple color={"#000"} size={30} />
              ) : failure ? (
                "TRY AGAIN"
              ) : (
                "SEND"
              )
            }
          />
        </div>
        <div className="face success">
          <h2>Success</h2>
          <p>Your message was sent successfully.</p>
          <p>Thank you for getting in touch, I will endeavour to respond quickly.</p>
          <Button
            text={"Close"}
            className={"success"}
            onClick={() => setModalForm(null, true)}
          />
          {/* <button className="close" onClick={() => setModalForm(null, true)}>
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MessageConfirm;
