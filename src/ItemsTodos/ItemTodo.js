import React from "react";
//import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./itemtodo.css";

export const ItemTodo = (props) => {
  //Funciones de Completed y Deleted ToDo
  const handelOnCompleteTodo = () => {
    console.log("Todo completado");
  };

  const handlOnDeleteTodo = () => {
    console.log("Eliminasta Todo");
  };

  return (
    // <div>
    //   <ListGroup as="ul" className="my-2">
    //     <ListGroup.Item as="li" active>
    //       <p>{props.text} </p>
    //     </ListGroup.Item>
    //   </ListGroup>
    // </div>

    <Card style={{ width: "18rem", heigth: "10rem" }} className="mx-2 my-2 row">
      {/* //evaluo si la popiedad termunate es false o true */}
      <Card.Body className={`${props.terminate && "cardOver"}`}>
        <Card.Title>ToDo Pendintes</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ToDo No.</Card.Subtitle>
        <Card.Text className={`${props.terminate && "throughtlineTodo"}`}>
          {props.text}
        </Card.Text>
        {/* <Card.Text>{props.terminate}</Card.Text> */}
        <Card.Link href="#" onClick={handelOnCompleteTodo}>
          Terminar
        </Card.Link>
        <Card.Link href="#" onClick={handlOnDeleteTodo}>
          Eliminar
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
