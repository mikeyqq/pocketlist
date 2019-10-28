import React from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import { connect } from "react-redux";
import { startCreateToDoItem } from "../../actions/toDoItems";

const CreateToDoPage = props => (
  <div>
    <ToDoForm
      onSubmit={toDoItem => {
        props.dispatch(startCreateToDoItem(toDoItem));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(CreateToDoPage);
