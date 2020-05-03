var comments = require("../models/comment.js");
const { getElementById, getIndexById, updateElement, createCommentElement } = require('./utils');

//get all comments from the models folder
var getAllComments = (req, res) => {
   res.send(comments);
};

// outputs specific comment
var getCommentById = (req, res) => {
    const foundComment = getElementById(req.params.id, comments);
    res.send(foundComment);
};

// create new comment
var createComment = (req, res) => {
    const receivedComment = createCommentElement(req.query, comments);
    if (receivedComment) {
        comments.push(receivedComment);
        res.status(201).send(receivedComment);
    } else {
        res.status(400).send();
    }
};

// delete comment by id
var deleteComment = (req, res) => {
    const commentIndex = getIndexById(req.params.id, comments);
    if (commentIndex !== -1) {
        comments.splice(commentIndex, 1);
        res.status(204).send();
    }
};

// update comment
var updateComment = (req, res) => {
    const commentIndex = getIndexById(req.params.id, comments);
    if (commentIndex !== -1) {
        updateElement(req.params.id, req.query, comments);
        res.send(comments[commentIndex]);
    }
};

module.exports = { getAllComments, getCommentById, createComment, deleteComment, updateComment };
