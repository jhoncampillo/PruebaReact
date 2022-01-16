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
      id: 0,
      title: "Segunda Tarea",
      description: "Trabajo 2",
      terminate: true,
    },
  ],
  openModal: false,
};

export const globalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = function (task) {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const toggleModal = function (openModal) {
    dispatch({ type: "TOGGLE_MODAL", payload: openModal });
  };

  return (
    <globalContext.Provider value={{ ...state, addTask, toggleModal }}>
      {/* recibo indormacion del estado que preovee el provider */}
      {children}
    </globalContext.Provider>
  );
};
