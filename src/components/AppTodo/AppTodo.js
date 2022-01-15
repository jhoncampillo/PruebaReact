import React from "react";
import { AddTodo } from "../addTodo/AddTodo";
import { useState } from "react";
import { CounterTodo } from "../CounterTodo/CounterTodo";
import { ListTodos } from "../ListTodo.js/ListTodos";
import { SearchTodo } from "../searchedTodo/SearchTodo";

export const AppTodo = () => {
  const Todos = [
    { text: "Seguir programando React", terminate: false },
    { text: "Lavar el carro", terminate: true },
    { text: "Hacer el Almuerzo", terminate: false },
    { text: "Estudiar angular", terminate: true },
    { text: "Proyectos Personales", terminate: false },
    { text: "Orad Sin Ceasar", terminate: true },
    { text: "Restrospectiva tu Vida", terminate: true },
  ];

  //creo es estate
  const [searchtodo, setSearchtodo] = useState("");
  //state para el Counter
  const [conttodos, setContTodos] = useState(Todos);
  console.log("Son", conttodos);

  let todoSearch = [];
  if (!searchtodo.length >= 1) {
    todoSearch = conttodos;
  }

  console.log(" if", todoSearch);
  //contar terminados si son  true
  const terminateTodo = conttodos.filter((todo) => !!todo.terminate).length;
  console.log(terminateTodo);

  //creo un totalizador de Todos
  const todosTotal = conttodos.length;
  console.log(todosTotal);

  return (
    <>
      <CounterTodo todosTotal={todosTotal} terminate={terminateTodo} />
      <AddTodo />
      <SearchTodo setSearchtodo={setSearchtodo} searchtodo={searchtodo} />
      <ListTodos todoSearch={todoSearch} />
    </>
  );
};
