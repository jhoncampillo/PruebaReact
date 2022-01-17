import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { globalContext } from "../../Context/GlobalContext";
//import PropTypes from "prop-types";
import { ItemTodo } from "../../ItemsTodos/ItemTodo";

export const ListTodos = () => {
  const { taskList } = useContext(globalContext);
  const [search, setSearch] = useState("");
  const [filterTasks, setFilterTasks] = useState(taskList);

  const handleOnChangueTodo = (e) => {
    const searchString = e.target.value;
    setSearch(searchString.toLowerCase());
    handleFilterLogic();
  };

  const handleFilterLogic = function () {
    if (search.length > 1) {
      setFilterTasks(
        taskList.filter((task) =>
          task.title?.trim()?.toLocaleLowerCase().includes(search)
        )
      );
    } else {
      setFilterTasks(taskList);
    }
  };

  useEffect(() => {
    setSearch("");
    handleFilterLogic();
  }, [taskList]);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <InputGroup.Text>Buscar</InputGroup.Text>
        <FormControl
          placeholder="Buscar ToDo's"
          value={search}
          onChange={handleOnChangueTodo}
        />
      </div>

      <div className="row justify-content-center">
        <h1 className="row justify-content-center">Listado de ToDos</h1>
        {filterTasks.map((todo, index) => {
          //retorno a todo item el map del array
          return (
            // <ItemTodo
            //   key={todo.text}
            //   text={todo.text}
            //   terminate={todo.terminate}
            // ></ItemTodo>
            <ItemTodo
              key={index}
              {...{ ...todo, numberTask: index }}
            ></ItemTodo>
          );
        })}
      </div>
    </>
  );
};
