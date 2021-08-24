import firebase from "firebase";

var Config = {
  apiKey: "AIzaSyAm0fwXgs0evEw21qKNwJhMOgbT9MKt0VA",
  authDomain: "expense-tracker-1e6c9.firebaseapp.com",
  projectId: "expense-tracker-1e6c9",
  storageBucket: "expense-tracker-1e6c9.appspot.com",
  messagingSenderId: "245284259572",
  appId: "1:245284259572:web:0310527fe6ff673f4d80a1",
};
firebase.initializeApp(Config);

export default firebase;
