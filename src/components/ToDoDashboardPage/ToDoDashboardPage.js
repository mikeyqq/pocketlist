import React from "react";
import ToDoList from "../ToDoList/ToDoList";
import ToDoListFilters from "../ToDoFilters/ToDoFilters";
import "./ToDoDashboardPage.scss";

const ToDoDashboardPage = () => (
  <div className="dashboard-container">
    <ToDoListFilters />
    <ToDoList />
  </div>
);

export default ToDoDashboardPage;
