import React, { useContext } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { globalContext } from "../../Context/GlobalContext";

export const SearchTodo = ({ searchtodo, setSearchtodo }) => {
  const { taskList } = useContext(globalContext);

  const handleOnChangueTodo = (e) => {
    setSearchtodo(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <InputGroup.Text>Buscar</InputGroup.Text>
      <FormControl
        placeholder="Buscar ToDo's"
        value={searchtodo}
        onChange={handleOnChangueTodo}
      />
    </div>
  );
};
