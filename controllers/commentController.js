
var comments = require("../models/comment.js");

//get all comments from the models folder
const getAllComments = (req,res) => {
 res.send(comments);
};

module.exports = {
getAllComments,
};
