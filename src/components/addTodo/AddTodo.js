import React, { useContext } from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Modalcomponent } from "../../Modal/Modal";
import { FormModal } from "../../formModal/FormModal";
import { globalContext } from "../../Context/GlobalContext";

export const AddTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <InputGroup
        size="lg"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={handleModal} className="btn btn-primary">
          Agregar tarea
        </button>
      </InputGroup>
      {/* //LLamo el Modal si el estado del modalShow es "True" */}
      {showModal && (
        <Modalcomponent>
          <FormModal setShowModal={setShowModal} />
        </Modalcomponent>
      )}
      ;
    </>
  );
};
