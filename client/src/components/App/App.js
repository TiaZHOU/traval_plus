import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../Nav/Nav";
import Home from "../../pages/Home/Home";
import Tasks from "../../pages/Tasks/Tasks";
import Reqs from "../../pages/Reqs/Reqs";
import Map from "../../pages/Alerts/Alert";
import Forum from "../../pages/Forum/App";

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
                      <Reqs />
                  </Route>
                  <Route path="/travel-tasks">
                      <Tasks />
                  </Route>
                  <Route path="/map">
                    <Map />
                  </Route>
                  <Route path="/forum">
                      <Forum />
                </Route>
              </Switch>
          </div>
      </Router>
  );
}
