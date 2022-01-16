import React, { useContext } from "react";
import { globalContext } from "../../Context/GlobalContext";
//import PropTypes from "prop-types";
import { ItemTodo } from "../../ItemsTodos/ItemTodo";

export const ListTodos = () => {
  const { taskList } = useContext(globalContext);

  return (
    <div className="row justify-content-center">
      <h1 className="row justify-content-center">Listado de ToDos</h1>
      {taskList.map((todo) => {
        //retorno a todo item el map del array
        return (
          // <ItemTodo
          //   key={todo.text}
          //   text={todo.text}
          //   terminate={todo.terminate}
          // ></ItemTodo>
          <ItemTodo key={todo.text} {...todo}></ItemTodo>
        );
      })}
    </div>
  );
};
