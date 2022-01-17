import React, { useContext } from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Modalcomponent } from "../../Modal/Modal";
import { FormModal } from "../../formModal/FormModal";
import { globalContext } from "../../Context/GlobalContext";
import { CatModal } from "../catModal/CatModal";

export const AddTodoCat = () => {
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
          Agregar tareas con api de gatos
        </button>
      </InputGroup>
      {/* //LLamo el Modal si el estado del modalShow es "True" */}
      {showModal && (
        <Modalcomponent>
          <CatModal setShowModal={setShowModal} />
        </Modalcomponent>
      )}
      ;
    </>
  );
};
