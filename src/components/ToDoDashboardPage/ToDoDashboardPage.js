import React from "react";
import ToDoList from "../ToDoList/ToDoList";
import ToDoListFilters from "../ToDoFilters/ToDoFilters";

const ToDoDashboardPage = () => (
  <div>
    <ToDoListFilters />
    <ToDoList />
  </div>
);

export default ToDoDashboardPage;
