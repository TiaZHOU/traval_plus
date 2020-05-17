import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Nav from "../Nav/Nav";
import Home from "../../pages/Home/Home";
import Tasks from "../../pages/Tasks/Tasks";
import Visas from "../../pages/Reqs/Reqs";

export default function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>

                  <Route path="/tasks">
                      <Tasks />
                  </Route>

                  <Route path="/requirement/visa">
                      <Visas />
                      {/*<Immunisation />*/}
                  </Route>
                  <Route path="/alert">
                    <p>This page is under development.</p>
                  </Route>
                  <Route path="/forum">
                      <p>This page is under development.</p>
                </Route>
              </Switch>
          </div>
      </Router>
  );
}