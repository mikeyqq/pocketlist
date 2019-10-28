import React from "react";
import { connect } from "react-redux";
import ToDoListItems from "../ToDoListItems/ToDoListItems";
import selectToDos from "../../selectors/toDo";
import "./ToDoList.scss";

const ToDoList = props => {
  return (
    <div className="to-do-list-container">
      {props.toDos.map(toDo => {
        return <ToDoListItems key={toDo.id} {...toDo} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("what is the state here?", state.toDos);
  return {
    toDos: selectToDos(state.toDos, state.filters)
  };
};

export default connect(mapStateToProps)(ToDoList);
