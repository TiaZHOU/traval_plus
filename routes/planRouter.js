const express = require("express");

// create router
const planRouter = express.Router();

// load/import the plan controller
const planController = require("../controllers/planController.js");

//get all plans
planRouter.get("/", planController.getAllPlans);

// handle the GET request to get an plan by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
planRouter.get("/:id", planController.getPlanByID);

//testing need fix for MongoDB
  //planRouter.get("/test/:id",planController.testPlanByID);
// handle the POST request to add an plan

planRouter.post("/", planController.addPlan);

// handle the POST request to update an plan
planRouter.post("/:id", planController.updatePlan);

// export the router
module.exports = planRouter;
