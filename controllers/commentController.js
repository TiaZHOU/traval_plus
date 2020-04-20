var comments = require("../models/comment.js");

const getAllComments = (req,res) => {
   res.send(comments);
};

module.exports = {
  getAllComments,
};
