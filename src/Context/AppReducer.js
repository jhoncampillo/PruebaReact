export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const task = action.payload;
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            ...task,
            id: state.taskList.length,
          },
        ],
      };
    case "TOGGLE_TERMINATE":
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id === action.payload) {
            task.terminate = !task.terminate;
          }
          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        taskList: state.taskList.filter((m) => {
          return m.id !== action?.payload;
        }),
      };
    case "EDIT_TASK":
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id === action?.payload.id) {
            task = {
              ...action.payload,
            };
          }
          return task;
        }),
      };
    default:
      break;
  }
}
