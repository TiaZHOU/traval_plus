var posts = require("../models/post.js");


//get all posts
const getAllPosts = (req,res) => {
   res.send(posts);
};

module.exports = {
  getAllPosts,
};
