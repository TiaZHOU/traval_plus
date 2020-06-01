import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PostDetail from "../../components/post/PostDetail";
import NewPost from "../../components/post/NewPost";
import EditPost from "../../components/post/EditPost";
import { Container } from "reactstrap";
// import Profile from "./components/user/Profile";
import ProtectedRoute from "../../components/auth/ProtectedRoute";

import "./Forum.css";

import store from "../../store";
import { loadUser } from "../../actions/authActions";
import AppNavbar from "../../components/layout/AppNavbar";
import Home from "../../components/layout/Home";

export default function Forum() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <div>
      <AppNavbar />
      <Container>
        <Switch>
          <Route exact path="/forum" component={Home} />
          <Route path="/forum/posts/:postId" component={PostDetail} />
          <ProtectedRoute exact path="/forum/post/new" component={NewPost} />
          <ProtectedRoute
            exact
            path="/forum/post/edit/:postId"
            component={EditPost}
          />
        </Switch>
      </Container>
    </div>
  );
}
