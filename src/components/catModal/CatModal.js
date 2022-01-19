import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getCatsFromApi } from "../../api/CatApi";
import { globalContext } from "../../Context/GlobalContext";
import "./CatModal.css";

export const CatModal = ({ setShowModal, taskToEdit }) => {
  const { addTask } = useContext(globalContext);
  const [numberToDos, setNumberToDos] = useState("");

  const onSubmmitAdd = (e) => {
    e.preventDefault();
    getCatsFromApi(numberToDos).then((resp) => {
      resp.forEach((fact, i) => {
        const task = {
          title: `Tarea #${i + 1}`,
          description: fact,
          terminate: false,
          id: Date.now(),
        };
        addTask(task);
      });
      setShowModal(false);
    });
  };

  const handleChangeNumber = (e) => {
    setNumberToDos(e.target.value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <Form className="form" onSubmit={onSubmmitAdd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="title">
          Indica el numero de tareas que deseas crear
        </Form.Label>
        <input
          className="form-control"
          type="number"
          placeholder="Titulo de la tarea"
          onChange={handleChangeNumber}
        />
      </Form.Group>
      <div className="buttons">
        <Button variant="primary" type="submit" value="Submit">
          Crear toDos
        </Button>
        <Button
          variant="danger"
          type="submit"
          value="Submit"
          onClick={handleCancel}
        >
          Cancelar
        </Button>
      </div>
    </Form>
  );
};
