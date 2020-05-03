var posts = require("../models/post.js");
const { getElementById, getIndexById, updateElement, createPostElement } = require('./utils');

//get all posts
var getAllPosts = (req, res) => {
   res.send(posts);
};

// outputs specific post
var getPostById = (req, res) => {
    const foundPost = getElementById(req.params.id, posts);
    res.send(foundPost);
};

// create new post
var createPost = (req, res) => {
    const receivedPost = createPostElement(req.query, posts);
    if (receivedpost) {
        posts.push(receivedPost);
        res.status(201).send(receivedPost);
    } else {
        res.status(400).send();
    }
};

// delete post by id
var deletePost = (req, res) => {
    const postIndex = getIndexById(req.params.id, posts);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(204).send();
    }
};

// update post
var updatePost = (req, res) => {
    const postIndex = getIndexById(req.params.id, posts);
    if (postIndex !== -1) {
        updateElement(req.params.id, req.query, posts);
        res.send(posts[postIndex]);
    }
};

module.exports = { getAllPosts, getPostById, createPost, deletePost, updatePost };
