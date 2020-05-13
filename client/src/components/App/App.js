import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../Nav/Nav";
import Home from "../../pages/Home";
import Tasks from "../../pages/Task";

export default function App() {
  return (
      <Router>
        <div className="App">
          <Nav />

          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>

              <Route path="/tasks">
                  <Tasks />
              </Route>

              {/* <Route path="/requirements/visa">
              <Reqs />
            </Route>*/}

          </Switch>
        </div>
      </Router>
  );
}