import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Nav from "../Nav/Nav";
import Home from "../../pages/Home/Home";
import Tasks from "../../pages/Tasks/Tasks";
import Visas /*immunisation*/ from "../../pages/Reqs/Reqs";

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

                  <Route path="/requirement/visa">
                      <Visas />
                      {/*<Immunisation />*/}
                  </Route>

                  {/*
                <Route path="/requirements/visa">
                    <Reqs />
                </Route>

                <Route path="/requirements/visa">
                    <Reqs />
                </Route>*/}

              </Switch>
          </div>
      </Router>
  );
}