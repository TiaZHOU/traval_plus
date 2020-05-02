const express = require("express");
const forumRouter = express.Router();

// load/import the routers
const userRouter = require("./forum-subroutes/userRouter");
const postRouter = require("./forum-subroutes/postRouter");
const commentRouter = require("./forum-subroutes/commentRouter");

forumRouter.use("/user", userRouter);
forumRouter.use("/post", postRouter);
forumRouter.use("/comment", commentRouter);

module.exports = forumRouter;
