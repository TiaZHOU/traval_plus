var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: {type: String},
    name: {type: String},
    email:{type : String}
});

module.exports = mongoose.model("user", userSchema, "user");
