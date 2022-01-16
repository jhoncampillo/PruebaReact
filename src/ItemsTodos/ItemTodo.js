import React from "react";
//import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./itemtodo.css";

export const ItemTodo = ({ id, title, description, terminate }) => {
  //Funciones de Completed y Deleted ToDo
  const handelOnCompleteTodo = () => {
    console.log("Todo completado");
  };

  const handlOnDeleteTodo = () => {
    console.log("Eliminasta Todo");
  };

  return (
    <Card style={{ width: "18rem", heigth: "10rem" }} className="mx-2 my-2 row">
      {/* //evaluo si la popiedad termunate es false o true */}
      <Card.Body className={`${terminate && "cardOver"}`}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ToDo No.</Card.Subtitle>
        <Card.Text className={`${terminate && "throughtlineTodo"}`}>
          {description}
        </Card.Text>
        <Card.Link onClick={handelOnCompleteTodo}>Terminar</Card.Link>
        <Card.Link onClick={handlOnDeleteTodo}>Eliminar</Card.Link>
      </Card.Body>
    </Card>
  );
};
