import React from "react";
import Form from "./Form";
import ModalWrapper from "./ModalWrapper";

const Modal = ({ closeModal, addData, currentToDo, handleEdit }) => {
  return (
    <ModalWrapper>
      <div className="modal">
        <h1 onClick={closeModal}>Close Modal</h1>
        <Form
          handleEdit={handleEdit}
          currentToDo={currentToDo}
          addData={addData}
          closeModal={closeModal}
        />
      </div>
    </ModalWrapper>
  );
};

export default Modal;
