import React from "react";
import { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Modalcomponent } from "../../Modal/Modal";
import { FormModal } from "../../formModal/FormModal";

export const AddTodo = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setModalShow(true);
    console.log("Llegue1");
  };

  return (
    <>
      <InputGroup size="lg">
        <button onClick={handleModal} className="btn btn-primary">
          Add-Todo
        </button>
        <InputGroup.Text id="inputGroup-sizing-lg">Buscar</InputGroup.Text>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Buscar Todo"
        />
      </InputGroup>
      {/* //LLamo el Modal si el estado del modalShow es "True" */}
      {modalShow && (
        <Modalcomponent>
          <FormModal />
        </Modalcomponent>
      )}
      ;
    </>
  );
};
