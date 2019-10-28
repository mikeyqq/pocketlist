import React from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import { connect } from "react-redux";
import { startEditToDoItem, startRemoveToDoItem } from "../../actions/toDoItems";

const EditToDoPage = props => {
  return (
    <div>
      <ToDoForm
        toDo={props.toDo}
        onSubmit={toDo => {
          props.dispatch(startEditToDoItem(props.toDo.id, toDo));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startRemoveToDoItem({ id: props.toDo.id }));
          props.history.push("/");
          console.log("findout the id", props.toDo.id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
};

//1. state is the redux store state
//2. props are the info you can get from console when you select
//the specific to do item.
const mapStateToProps = (state, props) => {
  return { toDo: state.toDos.find(toDo => toDo.id === props.match.params.id) };
};

export default connect(mapStateToProps)(EditToDoPage);
