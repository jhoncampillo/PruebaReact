import { createContext, useReducer, useEffect } from "react";
import appReducer from "./AppReducer";

//estado inicial

const stateFromPersistence = JSON.parse(localStorage.getItem("state"));
const initialState = stateFromPersistence || {
  taskList: [],
  //searchedToDos: [],
};

// taskList: [
//   {
//     id: Date.now(),
//     title: "xxxx",
//     description: "ddddddddd",
//     terminate: false,
//   },
// ],

// searchedToDos: [],

export const globalContext = createContext(initialState);
//export const globalContext = createContext(init);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  //Persistencia
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

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
        // init,
      }}
    >
      {/* recibo indormacion del estado que preovee el provider */}
      {children}
    </globalContext.Provider>
  );
};
