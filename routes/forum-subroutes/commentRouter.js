var express = require('express');
var commentRouter = express.Router();
var commentController = require('../../controllers/commentController');

commentRouter.get("/", commentController.getAllComments);
/*
commentRouter.get('/:id', commentController.getCommentById); // get comment by id

commentRouter.post('/', commentController.createComment); // create new comment

commentRouter.put('/:id', commentController.updateComment); // update comment

commentRouter.delete('/:id', commentController.deleteComment); // delete comment
*/
module.exports = commentRouter;
