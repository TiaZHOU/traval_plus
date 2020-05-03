const express = require("express");
const forumRouter = express.Router();

// load/import the routers
const postRouter = require("./forum-subroutes/postRouter");
const commentRouter = require("./forum-subroutes/commentRouter");

forumRouter.use("/post", postRouter);
forumRouter.use("/comment", commentRouter);

module.exports = forumRouter;
