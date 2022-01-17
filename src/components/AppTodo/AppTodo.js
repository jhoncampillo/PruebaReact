import React from "react";
import { AddTodo } from "../addTodo/AddTodo";
import { useState } from "react";
import { CounterTodo } from "../CounterTodo/CounterTodo";
import { ListTodos } from "../ListTodo.js/ListTodos";
import { SearchTodo } from "../searchedTodo/SearchTodo";
import { ContextProvider } from "../../Context/GlobalContext";
import { AddTodoCat } from "../AddTodoCat/AddTodoCat";

export const AppTodo = () => {
  return (
    <>
      <ContextProvider>
        <CounterTodo />
        <div style={{ display: "flex", gap: "1rem" }}>
          <AddTodo />
          <AddTodoCat />
        </div>
        {/* <SearchTodo /> */}
        <ListTodos />
      </ContextProvider>
    </>
  );
};
