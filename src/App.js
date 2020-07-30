import React from 'react';
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
            <Switch>
                <Route path="/chat">
                    <h1>tinDev Chat</h1>
                </Route>
                <Route path="/">
                    <TinderCards/>
                </Route>
            </Switch>
            {/*Tinder cards*/}
            {/*Buttons below Tinder cards*/}
            {/*Chat screen*/}
            {/*individual chat screen*/}
        </Router>
    </div>
  );
}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.17.1/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.17.1/firebase-analytics.js"></script>
//
// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
//
// const firebaseConfig = {
//   apiKey: "AIzaSyB6hmnkuKzl3A8JVNYynAA01BzidWZtN0w",
//   authDomain: "tinder-clone-d4700.firebaseapp.com",
//   databaseURL: "https://tinder-clone-d4700.firebaseio.com",
//   projectId: "tinder-clone-d4700",
//   storageBucket: "tinder-clone-d4700.appspot.com",
//   messagingSenderId: "971298826995",
//   appId: "1:971298826995:web:6f320d2cd05058d39da586",
//   measurementId: "G-1SBY8YD39G"
// };

export default App;
