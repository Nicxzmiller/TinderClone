import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6hmnkuKzl3A8JVNYynAA01BzidWZtN0w",
  authDomain: "tinder-clone-d4700.firebaseapp.com",
  databaseURL: "https://tinder-clone-d4700.firebaseio.com",
  projectId: "tinder-clone-d4700",
  storageBucket: "tinder-clone-d4700.appspot.com",
  messagingSenderId: "971298826995",
  appId: "1:971298826995:web:6f320d2cd05058d39da586",
  measurementId: "G-1SBY8YD39G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;