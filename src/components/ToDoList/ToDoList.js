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

//this function has the redux store state that can be passed as props to the ToDoList components.
//this is becaue of using connect()
const mapStateToProps = state => {
  console.log("what is the state here?", state.toDos);
  return {
    toDos: selectToDos(state.toDos, state.filters)
  };
};

export default connect(mapStateToProps)(ToDoList);
