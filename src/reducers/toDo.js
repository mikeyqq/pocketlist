const toDoReducerDefaultState = [];

export default (state = toDoReducerDefaultState, action) => {
  switch (action.type) {
    case "CREATE_TO_DO":
      return [...state, action.toDo];
    case "REMOVE_TO_DO":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_TO_DO":
      return state.map(toDoItem => {
        if (toDoItem.id === action.id) {
          return {
            ...toDoItem,
            ...action.updates
          };
        } else {
          return toDoItem;
        }
      });
    case "SET_TO_DOS":
      return action.toDos;
    default:
      return state;
  }
};
