import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { globalContext } from "../../Context/GlobalContext";
import "./CounterTodo.css";

export const CounterTodo = () => {
  const { taskList } = useContext(globalContext);
  const termanitedToDosNumber = taskList.filter(
    (task) => task.terminate
  ).length;

  return (
    <>
      <h3 style={{ textAlign: "center" }}>ToDos App</h3>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          padding: "2rem",
          justifyContent: "center",
        }}
      >
        <div className="counter-card">
          <h4>Numero de toDos</h4>
          <h4>{taskList.length}</h4>
        </div>
        <div className="counter-card">
          <h4>Numero de toDos pendientes</h4>
          <h4>{taskList.length - termanitedToDosNumber}</h4>
        </div>
        <div className="counter-card">
          <h4>Numero de toDos terminadas</h4>
          <h4>{termanitedToDosNumber}</h4>
        </div>
      </div>
    </>
  );
};
