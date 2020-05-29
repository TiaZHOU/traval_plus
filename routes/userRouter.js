var express = require('express');
var userRouter = express.Router();
var userController = require('../controllers/userController');


userRouter.get('/:username', userController.getUserById); // get user by username

userRouter.post('/', userController.createUser); // create new user

userRouter.put('/:username', userController.updateUser); // update user

userRouter.delete('/:username', userController.deleteUser); // delete user

module.exports = userRouter;