import React from "react";
import Form from "./Form";

const Modal = ({ closeModal, addData, currentToDo, handleEdit }) => {
  return (
    <div className="modal">
      <h1 onClick={closeModal}>Close Modal</h1>
      <Form
        handleEdit={handleEdit}
        currentToDo={currentToDo}
        addData={addData}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Modal;
