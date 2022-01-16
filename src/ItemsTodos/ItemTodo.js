import React, { useContext } from "react";
//import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { globalContext } from "../Context/GlobalContext";
import "./itemtodo.css";

export const ItemTodo = ({ id, title, description, terminate }) => {
  const { toggleTerminate, deleteTask } = useContext(globalContext);

  const handelOnCompleteTodo = () => {
    console.log("Terminate");
    toggleTerminate(id);
  };

  const handleOnDeleteTodo = () => {
    deleteTask(id);
  };

  return (
    <Card style={{ width: "18rem", heigth: "10rem" }} className="mx-2 my-2 row">
      {/* //evaluo si la popiedad termunate es false o true */}
      <Card.Body className={`${terminate && "cardOver"}`}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Tarea numero#{id + 1}
        </Card.Subtitle>
        <Card.Text className={`${terminate && "throughtlineTodo"}`}>
          {description}
        </Card.Text>
        <Card.Link onClick={handelOnCompleteTodo}>Terminar</Card.Link>
        <Card.Link onClick={handleOnDeleteTodo}>Eliminar</Card.Link>
      </Card.Body>
    </Card>
  );
};
