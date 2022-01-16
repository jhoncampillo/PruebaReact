import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { globalContext } from "../Context/GlobalContext";
import "./FormModal.css";

export const FormModal = ({ setShowModal, taskToEdit }) => {
  const { addTask, editTask } = useContext(globalContext);
  const [task, setTask] = useState(taskToEdit ?? {});
  console.log(taskToEdit);

  // Funcion para adiconar Todo
  const onSubmmitAdd = (e) => {
    e.preventDefault();

    if (task.id >= 0) {
      editTask(task);
    } else {
      addTask(task);
    }
    setShowModal(false);
  };

  const onChangeTextArea = (e) => {
    const value = e.target.value;
    setTask({ ...task, description: value });
  };

  const onChangeInputTitle = (e) => {
    const value = e.target.value;
    setTask({ ...task, title: value });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <Form className="form" onSubmit={onSubmmitAdd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="title">Adicion un AddTodo</Form.Label>
        <input
          className="form-control"
          onChange={onChangeInputTitle}
          placeholder="Titulo de la tarea"
          value={task.title}
        />
        <textarea
          className="form-control "
          id="exampleControl"
          placeholder="Descripcion de la tarea"
          rows="4"
          value={task.description}
          onChange={onChangeTextArea}
        />
      </Form.Group>
      <div className="buttons">
        <Button variant="primary" type="submit" value="Submit">
          {task.id >= 0 ? "Edit" : "Create"}
        </Button>
        <Button
          variant="danger"
          type="submit"
          value="Submit"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};
