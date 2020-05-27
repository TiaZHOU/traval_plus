const express = require("express");
const alertRouter = express.Router();
const alertController = require("../controllers/alertController.js");

alertRouter.get("/", alertController.getAllAlerts);

alertRouter.get("/:country", alertController.getAlertById);

// export the router
module.exports = alertRouter;
