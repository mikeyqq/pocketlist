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
