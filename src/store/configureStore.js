import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import toDoReducer from "../reducers/toDo";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

export default () => {
  const store = createStore(
    combineReducers({
      toDos: toDoReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
