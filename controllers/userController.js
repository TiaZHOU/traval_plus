var users = require("../models/user.js");
const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

// outputs all the users in the models
var getAllUsers = (req, res) => {
   res.send(users);
};

// outputs specific user
var getUserById = (req, res) => {
    const foundUser = getElementById(req.params.id, users);
    res.send(foundUser);
};

// create new user
var createUser = (req, res) => {
    const receivedUser = createElement(req.query, users);
    if (receivedUser) {
        users.push(receivedUser);
        res.status(201).send(receivedUser);
    } else {
        res.status(400).send();
    }
};

// delete user by id
var deleteUser = (req, res) => {
    const userIndex = getIndexById(req.params.id, users);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    }
};

// update user
var updateUser = (req, res) => {
    const userIndex = getIndexById(req.params.id, users);
    if (userIndex !== -1) {
        updateElement(req.params.id, req.query, users);
        res.send(users[userIndex]);
    }
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser, updateUser };
