import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

//estado inicial
const initialState = {
  taskList: [
    {
      id: 0,
      title: "Primera Tarea",
      description: "Trabajo 1",
      terminate: false,
    },
    {
      id: 1,
      title: "Segunda Tarea",
      description: "Trabajo 2",
      terminate: true,
    },
  ],
};

export const globalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = function (task) {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const toggleTerminate = function (id) {
    dispatch({ type: "TOGGLE_TERMINATE", payload: id });
  };

  const deleteTask = function (id) {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const editTask = function (task) {
    dispatch({ type: "EDIT_TASK", payload: task });
  };

  return (
    <globalContext.Provider
      value={{
        ...state,
        addTask,
        toggleTerminate,
        deleteTask,
        editTask,
      }}
    >
      {/* recibo indormacion del estado que preovee el provider */}
      {children}
    </globalContext.Provider>
  );
};
