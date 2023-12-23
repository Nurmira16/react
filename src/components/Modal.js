import React from "react";
import Form from "./Form";

const Modal = ({ closeModal, addData, currentToDo }) => {
  return (
    <div className="modal">
      <h1 onClick={closeModal}>Close Modal</h1>
      <Form currentToDo={currentToDo} addData={addData} />
    </div>
  );
};

export default Modal;
