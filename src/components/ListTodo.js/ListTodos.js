import React from "react";
//import PropTypes from "prop-types";
import { ItemTodo } from "../../ItemsTodos/ItemTodo";

export const ListTodos = ({ todoSearch }) => {
  //estado contar Todos

  return (
    <div className="row justify-content-center">
      <h1 className="row justify-content-center">Listado de ToDos</h1>
      {todoSearch.map((todo) => {
        //retorno a todo item el map del array
        return (
          <ItemTodo
            key={todo.text}
            text={todo.text}
            terminate={todo.terminate}
          ></ItemTodo>
        );
      })}
    </div>
  );
};
