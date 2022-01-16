export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const task = action.payload;
      return {
        ...state,
        openModal: false,
        taskList: [...state.taskList, task],
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        openModal: action?.payload,
      };
    default:
      break;
  }
}
