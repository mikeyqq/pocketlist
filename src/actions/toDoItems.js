// import uuid from "uuid";
import database from "../firebase/firebase";

export const createToDoItem = toDo => ({
  type: "CREATE_TO_DO",
  toDo
});

//thunk
export const startCreateToDoItem = (toDoData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = "", description = "", level = 0, createdAt = 0 } = toDoData;
    const toDo = { title, description, level, createdAt };
    database
      .ref(`users/${uid}/toDos`)
      .push(toDo)
      .then(ref => {
        dispatch(
          createToDoItem({
            id: ref.key,
            ...toDo
          })
        );
      });
  };
};

export const removeToDoItem = ({ id } = {}) => ({
  type: "REMOVE_TO_DO",
  id
});

//thunk
export const startRemoveToDoItem = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/toDos/${id}`)
      .remove()
      .then(() => {
        dispatch(removeToDoItem({ id }));
      });
  };
};

export const editToDoItem = (id, updates) => ({
  type: "EDIT_TO_DO",
  id,
  updates
});

//thunk
export const startEditToDoItem = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/toDos/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editToDoItem(id, updates));
      });
  };
};

export const setToDos = toDos => ({
  type: "SET_TO_DOS",
  toDos
});

//thunk
export const startSetToDos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/toDos`)
      .once("value")
      .then(snapshot => {
        const toDos = [];
        snapshot.forEach(childSnapShot => {
          toDos.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
          });
        });
        dispatch(setToDos(toDos));
      });
  };
};

//components call on the action generator
//action generator returns object to dispatch to reducer
//reducer go through its function and provides the redux store a change from the object provided
