var express = require('express');
var requirementRouter = express.Router();

// import sub-routers for visa and immunisation data
var visaRouter = require("./req-subroutes/visaRouter");
var immunisationRouter = require("./req-subroutes/immunisationRouter.js");

requirementRouter.use("/visa", visaRouter);
requirementRouter.use("/immunisation", immunisationRouter);

module.exports = requirementRouter;