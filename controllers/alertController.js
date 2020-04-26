const alerts = require("../models/alerts.js");

// function to handle a request to get all alerts
const getAllAlerts = (req, res) => {
    res.send(alerts); // return the list of alerts
};

// function to handle a request to a particular alert
const getAlertByID = (req, res) => {
    // search for alert in the database via ID
    const alert = alerts.find(alert => alert.id === req.params.id);

    if (alert) {
        // send back the alert details
        res.send(alert);
    } else {
        // you can decide what to return if alert is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add alert
const addAlert = (req, res) => {
    // extract info. from body
    const alert = req.body;

    // add alert to array
    alerts.push(alert);
    res.send(alerts);
};

// function to modify alert by ID
const updateAlert = (req, res) => {
    const new_alert = req.body;

    // search for alert in the database via ID
    const alert = alerts.find(alert => alert.id === req.params.id);
    if (!alert) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_alert into the original alert object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(alert, new_alert);

    // return updated alert
    res.send(alert);
};

// remember to export the functions
module.exports = {
    getAllAlerts,
    getAlertByID,
    addAlert,
    updateAlert
};