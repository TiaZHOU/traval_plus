var express = require('express');
var app = express();
var requirementRouter = express.Router();

// import sub-routers for visa and immunisation data
var visaRouter = require("./subroutes/visaRouter");
var immunisationRouter = require("./subroutes/immunisationRouter.js");

requirementRouter.use("/visa", visaRouter);
requirementRouter.use("/immunisation", immunisationRouter);

module.exports = requirementRouter;