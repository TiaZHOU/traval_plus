var express = require('express');
var userRouter = express.Router();
var userController = require('../../controllers/userController');

userRouter.get("/", userController.getAllUsers); // get all users

userRouter.get('/:id', userController.getUserById); // get user by id

userRouter.post('/', userController.createUser); // create new user

userRouter.put('/:id', userController.updateUser); // update user

userRouter.delete('/:id', userController.deleteUser); // delete user

module.exports = userRouter;