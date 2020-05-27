var mongoose = require("mongoose");
var Alert = mongoose.model("alert");

// Returns information about all countries
var getAllAlerts = async (req, res) => {
    try {
        const allAlerts = await Alert.find();
        return res.send(allAlerts); //return res.render('index', {items: allTasks});
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

// Returns information about a specify country
var getAlertById = async (req, res) => {
    const alertId = req.body.country;
    try {
        const alert = await Alert.findOne(alertId);
        return res.send(alert);
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

module.exports = {
    getAllAlerts,
    getAlertById
};