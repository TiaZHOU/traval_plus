var express = require('express');
var postRouter = express.Router();
var postController = require('../../controllers/postController');

postRouter.get("/", postController.getAllPosts);

postRouter.get('/:id', postController.getPostById); // get post by id

postRouter.post('/', postController.createPost); // create new post

postRouter.put('/:id', postController.updatePost); // update post

postRouter.delete('/:id', postController.deletePost); // delete post

module.exports = postRouter;