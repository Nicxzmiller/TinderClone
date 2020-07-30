import React from 'react';
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/chat">
                    <Header backButton="/" />
                    <h1>tinDev Chat</h1>
                </Route>
                <Route path="/">
                    <Header/>
                    <TinderCards/>
                    <SwipeButtons/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
