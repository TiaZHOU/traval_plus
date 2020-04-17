const express = require("express");

// create router
const router = express.Router();

// load/import the controllers
const appController = require('../controllers/appController.js');
const authController = require('../controllers/authController.js');
const userController = require('../controllers/userController.js');
const commentController = require('../controllers/commentController.js');

module.exports = router;
