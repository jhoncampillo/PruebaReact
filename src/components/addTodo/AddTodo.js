import React, { useContext } from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Modalcomponent } from "../../Modal/Modal";
import { FormModal } from "../../formModal/FormModal";
import { globalContext } from "../../Context/GlobalContext";

export const AddTodo = () => {
  const { openModal, toggleModal } = useContext(globalContext);

  const handleModal = (e) => {
    e.preventDefault();
    toggleModal(true);
  };

  return (
    <>
      <InputGroup size="lg">
        <button onClick={handleModal} className="btn btn-primary">
          Add-Todo
        </button>
      </InputGroup>
      {/* //LLamo el Modal si el estado del modalShow es "True" */}
      {openModal && (
        <Modalcomponent>
          <FormModal />
        </Modalcomponent>
      )}
      ;
    </>
  );
};
