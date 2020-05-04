import React from "react";
import "../styles.css";
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Home from "./Login/Home"
import {Dashboard} from "./Dashboard/Dashboard"
import {Inspiration} from "./Dashboard/Inspiration"
import {RecipeMaker} from "./Dashboard/RecipeMaker"
import {Social} from "./Dashboard/Social"
import {UserAccount} from "./Dashboard/UserAccount"
import Register from "./Login/Register"

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />

          <Route path="/account" component={UserAccount} />
          <Route path="/recipemaker" component={RecipeMaker} />
          <Route path="/inspiration" component={Inspiration} />
          <Route path="/social" component={Social} />
        </Switch>
      </div>
    </Router>
  );
}
