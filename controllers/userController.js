var users = require("../models/user.js");

const getAllUsers = (req,res) => {
   res.send(users);
};

module.exports = {
  getAllUsers,
};
