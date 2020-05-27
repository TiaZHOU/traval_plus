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

var createUser = function(req,res){
    var user = new users({
        "username":req.body.authResp.userID,
        "Name":req.body.first_name,
        "Email":req.body.email,
    });

    user.save(function(err,newUser){
        if(err){
            console.log(err.errmsg);
            res.status(400).send(err.errmsg);
        }else{
            res.send(newUser);
        }
    });
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