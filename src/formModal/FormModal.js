import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { globalContext } from "../Context/GlobalContext";

export const FormModal = () => {
  const { addTask } = useContext(globalContext);
  const [task, setTask] = useState({});

  // Funcion para adiconar Todo
  const onSubmmitAdd = (e) => {
    e.preventDefault();
    addTask(task);
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
    console.log("Cancelar");
  };

  return (
    <Form onSubmit={onSubmmitAdd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adicion un AddTodo</Form.Label>
        <input className="form-control" onChange={onChangeInputTitle} />
        <textarea
          className="form-control "
          id="exampleControl"
          rows="4"
          onChange={onChangeTextArea}
        />
      </Form.Group>
      <Button variant="primary" type="submit" value="Submit">
        Submit
      </Button>
      <Button
        variant="primary"
        type="submit"
        value="Submit"
        className="mx-5"
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </Form>
  );
};
