const express = require("express");

// create router
const userRouter = express.Router();
const postRouter = express.Router();
const commentRouter = express.Router();

// load/import the controllers
const userController = require('../controllers/userController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');

userRouter.get("/", userController.getAllUsers);
postRouter.get("/", postController.getAllPosts);
commentRouter.get("/", commentController.getAllComments);

module.exports = {
   userRouter,
   postRouter,
   commentRouter
};
