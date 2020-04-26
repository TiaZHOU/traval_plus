const express = require("express");

// create router
const alertRouter = express.Router();

// load/import the alert controller
const alertController = require("../controllers/alertController.js");

//get all alerts
alertRouter.get("/", alertController.getAllAlerts);

// handle the GET request to get an alert by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
alertRouter.get("/:id", alertController.getAlertByID);

// handle the POST request to add an alert
alertRouter.post("/", alertController.addAlert);

// handle the POST request to update an alert
alertRouter.post("/:id", alertController.updateAlert);

// export the router
module.exports = alertRouter;
