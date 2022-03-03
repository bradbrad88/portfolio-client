import React, { useState, useEffect } from "react";
import "stylesheets/Main.scss";
export const ModalFormContext = React.createContext();
const ModalFormProvider = ({ children }) => {
  const [modalForm, setModalForm] = useState(null);
  const [lock, setLock] = useState(false);
  useEffect(() => {
    if (modalForm) {
      const body = document.querySelector("body");
      console.log(body);
    }
  }, [modalForm]);
  const handleSetForm = (form, force) => {
    console.log(form, force, lock);
    if (force) return setModalForm(form);
    if (lock) return;
    setModalForm(form);
  };

  return (
    <ModalFormContext.Provider
      value={{
        setModalForm: handleSetForm,
        setLock,
        lock,
      }}
    >
      {modalForm && (
        <div className="modal-background" onClick={() => handleSetForm(null)}>
          <div className="form" onClick={e => e.stopPropagation()}>
            {modalForm}
          </div>
        </div>
      )}
      {children}
    </ModalFormContext.Provider>
  );
};
export default ModalFormProvider;
