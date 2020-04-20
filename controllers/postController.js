var posts = require("../models/post.js");

const getAllPosts = (req,res) => {
   res.send(posts);
};

module.exports = {
  getAllPosts,
};
