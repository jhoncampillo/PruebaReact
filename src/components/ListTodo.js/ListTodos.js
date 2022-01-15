import React from "react";
//import PropTypes from "prop-types";
import { ItemTodo } from "../../ItemsTodos/ItemTodo";
import { AddTodo } from "../addTodo/AddTodo";

export const ListTodos = (props) => {
  const Todos = [
    { text: "Trabajo1", terminate: false },
    { text: "Trabajo2", terminate: false },
    { text: "Trabajo3", terminate: false },
    { text: "Trabajo4", terminate: false },
    { text: "Trabajo5", terminate: false },
    { text: "Trabajo6", terminate: false },
    { text: "Trabajo7", terminate: false },
  ];

  return (
    <div className="row ">
      <h1>Listado de Todos</h1>
      {Todos.map((todo) => {
        //retorno a todo item el map del array
        return <ItemTodo key={todo.text} text={todo.text}></ItemTodo>;
      })}
    </div>
  );
};
