import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Nav from "../Nav/Nav";
import Home from "../../pages/Home/Home";
import Tasks from "../../pages/Tasks/Tasks";
import Visas from "../../pages/Reqs/Reqs";
import Alert from "../../pages/Alerts/Alert";
import Help from "../../pages/Helps/Help";
import Contact from "../../pages/Contact/Contact";
export default function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/travel-docs">
                      <Visas />
                      {/*<Immunisation />*/}
                  </Route>
                  <Route path="/travel-tasks">
                      <Tasks />
                  </Route>
                  <Route path="/alert">
                    <Alert/>>
                  </Route>
                  <Route path="/forum">
                      <p>This page is under development.</p>
                </Route>
                  <Route path="/help">
                      <Help/>>
                  </Route>
                  <Route path="/Contact">
                      <Contact/>>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}