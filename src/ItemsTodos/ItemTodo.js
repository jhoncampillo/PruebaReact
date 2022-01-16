import React, { useContext, useState } from "react";
//import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { globalContext } from "../Context/GlobalContext";
import { Modalcomponent } from "../Modal/Modal";
import { FormModal } from "../formModal/FormModal";
import { Button } from "react-bootstrap";

import "./itemtodo.css";

export const ItemTodo = ({ id, title, description, terminate }) => {
  const { toggleTerminate, deleteTask } = useContext(globalContext);

  const [showModal, setShowModal] = useState(false);

  const handelOnCompleteTodo = () => {
    toggleTerminate(id);
  };

  const handleOnDeleteTodo = () => {
    deleteTask(id);
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  return (
    <>
      <Card
        style={{
          width: "18rem",
          heigth: "10rem",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        className="mx-2 my-2 row"
      >
        {/* //evaluo si la popiedad termunate es false o true */}
        <Card.Body className={`${terminate && "cardOver"}`}>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Tarea numero#{id + 1}
          </Card.Subtitle>
          <Card.Text className={`${terminate && "throughtlineTodo"}`}>
            {description}
          </Card.Text>
          <div
            style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}
          >
            <Button variant="primary" type="button" onClick={handleEdit}>
              Editar
            </Button>
            <Button variant="info" type="button" onClick={handelOnCompleteTodo}>
              Terminar
            </Button>
            <Button variant="danger" type="button" onClick={handleOnDeleteTodo}>
              Eliminar
            </Button>
          </div>
        </Card.Body>
      </Card>
      {showModal && (
        <Modalcomponent>
          <FormModal
            setShowModal={setShowModal}
            taskToEdit={{
              title,
              id,
              description,
              terminate,
            }}
          />
        </Modalcomponent>
      )}
    </>
  );
};
