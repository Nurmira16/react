import React, { useEffect } from "react";
import Form from "./Form";
import ModalWrapper from "./ModalWrapper";

const Modal = ({ closeModal, addData, currentToDo, handleEdit }) => {
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
