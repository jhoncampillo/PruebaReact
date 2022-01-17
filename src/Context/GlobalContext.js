import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

//estado inicial
const initialState = {
  taskList: [
    {
      id: Date.now(),
      title: "Primera Tarea",
      description: "Trabajo 1",
      terminate: false,
    },
  ],
  searchedToDos: [],
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

  const search = function (searchString) {
    dispatch({ type: "SEARCH_TASKS", payload: searchString });
  };

  return (
    <globalContext.Provider
      value={{
        ...state,
        addTask,
        toggleTerminate,
        deleteTask,
        editTask,
        search,
      }}
    >
      {/* recibo indormacion del estado que preovee el provider */}
      {children}
    </globalContext.Provider>
  );
};
