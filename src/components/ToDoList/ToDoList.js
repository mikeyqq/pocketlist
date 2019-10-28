import React from "react";
import { connect } from "react-redux";
import ToDoListItems from "../ToDoListItems/ToDoListItems";
import selectToDos from "../../selectors/toDo";

const ToDoList = props => {
  return (
    <div>
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

//THIS BELOW IS THE PRE-REFACTOR WAY OF WRITING IT OUT TO CONNECT TO STORE
// const ConncetedToDoList = connect(state => {
//   console.log(state);
//   return {
//     toDos: state.toDos
//   };
// })(ToDoList);

//ToDoList component here equals to ConnectedToDoList.
//ToDoList is attached to connect function which can access the redux store
//state in this connect function is refering to the state in the redux store

// export default ConncetedToDoList;
