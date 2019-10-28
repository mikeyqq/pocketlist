import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { startSetToDos } from "./actions/toDoItems";
import configureStore from "./store/configureStore";
import { createToDoItem } from "./actions/toDoItems";
import { login, logout } from "./actions/auth";
import { firebase } from "./firebase/firebase";
import { history } from "../src/routers/AppRouter";

const store = configureStore();

store.dispatch(createToDoItem({ title: "Buy Groceries", description: "I need bananas.", level: 3, createdAt: 2000 }));
store.dispatch(
  createToDoItem({ title: "Pay Bills", description: "Gas, water, electricity", level: 5, createdAt: -100 })
);

const state = store.getState();
console.log("state in index", state);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

//store.dispatch(startSetToDos)
//this dispatch runs immediately to grab information from firebase.
//startsettodos is async thunk function
//grabs info from firebase, inserts it back to action generator
//action generator goes through reducer then to store.

//This firebase function will speak to firebase server to check if the user is logged in.
//In login page if you click login button, it triggers a function
//That function runs the firebase signinpop with googleauth
//once signed in, the firebase server will trigger user to true.
//which will now show users information.
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetToDos()).then(() => {
      ReactDOM.render(jsx, document.getElementById("root"));
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
