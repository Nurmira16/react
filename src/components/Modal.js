import React, { useEffect } from "react";
import Form from "./Form";
import ModalWrapper from "./ModalWrapper";

const Modal = ({ closeModal, addData, currentToDo, handleEdit }) => {
  const keydown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  });
  return (
    <ModalWrapper>
      <div className="modalWrapper" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <Form
            handleEdit={handleEdit}
            currentToDo={currentToDo}
            addData={addData}
            closeModal={closeModal}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
