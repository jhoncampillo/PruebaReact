import React from "react";
//import { ListGroup } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";

export const ItemTodo = (props) => {
  return (
    // <div>
    //   <ListGroup as="ul" className="my-2">
    //     <ListGroup.Item as="li" active>
    //       <p>{props.text} </p>
    //     </ListGroup.Item>
    //   </ListGroup>
    // </div>

    <Card style={{ width: "18rem", heigth: "10rem" }} className="mx-2 my-2 row">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href="#">Terminar</Card.Link>
        <Card.Link href="#">Eliminar</Card.Link>
      </Card.Body>
    </Card>
  );
};
