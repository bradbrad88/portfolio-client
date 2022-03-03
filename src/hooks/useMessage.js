import { useState } from "react";

const useMessage = () => {
  const [working, setWorking] = useState(false);
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendMessage = async messageDetails => {
    setFailure(false);
    setWorking(true);
    try {
      const { contactName, contactEmail, contactPhone, messageBody } =
        messageDetails;
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      const data = new URLSearchParams();
      data.append("contactName", contactName);
      data.append("contactEmail", contactEmail);
      data.append("contactPhone", contactPhone);
      data.append("messageBody", messageBody);
      const options = {
        headers,
        body: data.toString(),
        method: "POST",
      };
      const res = await fetch(
        process.env.REACT_APP_API_HOST + "/new_message",
        options
      );
      if (res.status === 201) return setSuccess(true);
      setFailure(true);
    } catch (error) {
      setWorking(false);
      setFailure(true);
    }
    setWorking(false);
  };

  return { working, sendMessage, success, failure };
};

export default useMessage;
