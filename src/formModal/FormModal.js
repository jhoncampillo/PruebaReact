import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export const FormModal = () => {
  //estado del text area
  const [textArea, setTextArea] = useState(" ");

  // Funcion para adiconar Todo
  const onSubmmitAdd = (e) => {
    e.preventDefault();
    console.log("Adicionando TODO");
  };

  //Capturo el Value del textArea
  const onChangeTextArea = (e) => {
    console.log(e.target.value);
  };

  //Funcion para Cancelar Form Modal
  const handleCancel = (e) => {
    e.preventDefault();
    console.log("Cancelar");
  };

  return (
    <Form onSubmit={onSubmmitAdd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adicion un AddTodo</Form.Label>
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
      <Button variant="primary" type="submit" value="Submit" className="mx-5">
        Cancel
      </Button>
    </Form>
  );
};
