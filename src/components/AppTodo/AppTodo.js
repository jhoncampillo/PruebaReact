import React from "react";
import { AddTodo } from "../addTodo/AddTodo";
import { useState } from "react";
import { CounterTodo } from "../CounterTodo/CounterTodo";
import { ListTodos } from "../ListTodo.js/ListTodos";
import { SearchTodo } from "../searchedTodo/SearchTodo";
import { ContextProvider } from "../../Context/GlobalContext";

export const AppTodo = () => {
  return (
    <>
      <ContextProvider>
        <CounterTodo />
        <AddTodo />
        <SearchTodo />
        <ListTodos />
      </ContextProvider>
    </>
  );
};
