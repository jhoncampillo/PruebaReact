import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export const SearchTodo = ({ searchtodo, setSearchtodo }) => {
  //creo estado
  //const [searchtodo, setSearchtodo] = useState(initialState);

  //Funcion para buscar ToDos
  const handleOnChangueTodo = (e) => {
    console.log(e.target.value);
    //Actualizo el valor del input al State
    setSearchtodo(e.target.value);
  };

  return (
    <div>
      <InputGroup.Text id="inputGroup-sizing-lg">Buscar</InputGroup.Text>
      <FormControl
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="Buscar ToDo"
        value={searchtodo}
        onChange={handleOnChangueTodo}
      />
    </div>
  );
};
