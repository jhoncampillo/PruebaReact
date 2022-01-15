import React from "react";

export const CounterTodo = ({ todosTotal, terminate }) => {
  const todosPendientes = todosTotal - terminate;

  return (
    <div>
      <h1 className="">Listado de ToDos = {todosTotal}</h1>
      <h2 className="">Pendientes = {todosPendientes}</h2>
      <h2 className="">Terminado = {terminate}</h2>
      <hr />
    </div>
  );
};
