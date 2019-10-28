import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUgGZeZTtl7aEJIEEgarsOE-sgJBS5VBA",
  authDomain: "ilist-8856e.firebaseapp.com",
  databaseURL: "https://ilist-8856e.firebaseio.com",
  projectId: "ilist-8856e",
  storageBucket: "ilist-8856e.appspot.com",
  messagingSenderId: "786999946481",
  appId: "1:786999946481:web:954ccfa1927cf48a134d50",
  measurementId: "G-5QFW1J1PDZ"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("to-do-items").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("to-do-items").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("to-do-items").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//this is a subscription which will run when theres a change in the database
// database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });

//fetching data from the database
//THIS RUNS ONLY ONCE
// database
//   .ref()
//   .once()
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(e);
//   });

//adds data to the database
// database.ref().set({
//   name: "tester test"
// });

//removes data from the database
// database.ref("name").remove();

//You can update nested objects in the database
// database.ref().update({
//   job: "manager",
//   "location/city": "boston"
// });
