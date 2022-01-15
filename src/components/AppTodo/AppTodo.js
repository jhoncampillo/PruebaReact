import React from "react";
import { AddTodo } from "../addTodo/AddTodo";
import { useState } from "react";
import { CounterTodo } from "../CounterTodo/CounterTodo";
import { ListTodos } from "../ListTodo.js/ListTodos";

export const AppTodo = () => {
  //Listado temporal
  const Todos = [
    { text: "Trabajo1", terminate: false },
    { text: "Trabajo1", terminate: false },
  ];

  //creo es estate
  const [todo, setTodo] = useState();

  return (
    <>
      <CounterTodo />
      <AddTodo />
      <ListTodos />
    </>
  );
};
