var users = require("../models/user.js");
//outputs all the users in the models
const getAllUsers = (req,res) => {
   res.send(users);
};

module.exports = {
  getAllUsers,
};
