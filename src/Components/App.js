import React from "react";
import "../styles.css";
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Home from "./Login/Home"
import LandingPage from "../Components/LandingPage"
import Dashboard from "./Dashboard/Dashboard"
import Inspiration from "./Dashboard/LinksWithinDash/Inspiration"
import RecipeMaker from "./Dashboard/LinksWithinDash/RecipeMaker"
import Social from "./Dashboard/LinksWithinDash/Social"
import Register from "./Login/Register"

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/login" component={Home}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />

          <Route path="/recipemaker" component={RecipeMaker} />
          <Route path="/inspiration" component={Inspiration} />
          <Route path="/social" component={Social} />
        </Switch>
      </div>
    </Router>
  );
}
