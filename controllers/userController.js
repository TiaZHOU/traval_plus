var mongoose = require("mongoose");
var users= mongoose.model("user");

// GET users by username
var getUserById = async (req, res) => {
    const userId = req.body.username;
    try {
        const user = await users.findOne(userId);
        return res.send(user);
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

// POST users
var createUser = (req, res) => {
    if(!req.body) { return res.send(400); }
    const data = new users(req.body);
    data.save();
    res.redirect('/user');
};

// DELETE users by username
var deleteUser = (req, res) => {
    const userId = req.body.username;
    users.findByIdAndRemove(userId).exec();
    res.redirect('/user');
};

// PUT users
var updateUser = (req, res) => {
    const userId = req.body.username;
    users.findById(userId, (err, doc) => {
        if (err) {
            console.error('error, no user found');
        } else {

            doc.name = req.body.name;
            doc.email = req.body.email;
            doc.save();
        }
        res.redirect('/user');
    })};

module.exports = { getUserById, createUser, deleteUser, updateUser };