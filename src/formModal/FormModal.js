import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { globalContext } from "../Context/GlobalContext";
import "./FormModal.css";

export const FormModal = ({ setShowModal, taskToEdit }) => {
  //state para editar
  const { addTask, editTask } = useContext(globalContext);
  //statte de tareas
  const [task, setTask] = useState(
    taskToEdit ?? {
      title: "",
      description: "",
    }
  );
  //Desestructuro
  const { title, description } = task;
  //Aplico el useEffect a todo el Form
  // useEffect(() => {
  //   console.log("Hey");
  //   localStorage.setItem("task", JSON.stringify());
  // }, []);
  //arreglo de dependencias

  // useEffect(() => {
  //   console.log("Hey");
  // }, [title]);

  const onSubmmitAdd = (e) => {
    e.preventDefault();

    if (task.id >= 0) {
      editTask(task);
    } else {
      addTask(task);
      console.log("Hola ", task);
    }
    setShowModal(false);
  };

  const onChangeTextArea = (e) => {
    const value = e.target.value;
    setTask({ ...task, description: value });
    //console.log(setTask);
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
        <Form.Label className="title">Adiciono un AddTodo</Form.Label>
        <input
          name="title"
          className="form-control"
          onChange={onChangeInputTitle}
          placeholder="Titulo de la tarea"
          value={title}
        />
        <textarea
          name="description"
          className="form-control "
          id="exampleControl"
          placeholder="Descripcion de la tarea"
          rows="4"
          value={description}
          onChange={onChangeTextArea}
        />
      </Form.Group>
      <div className="buttons">
        <Button variant="primary" type="submit" value="Submit">
          {task.id >= 0 ? "Editar" : "Crear"}
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
