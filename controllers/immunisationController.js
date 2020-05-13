var mongoose = require("mongoose");
var Immunisation = mongoose.model("immunisation");

// Returns information about all countries
var getAllImmunisations = async (req, res) => {
    try {
        const allImmunisations = await Immunisation.find();
        return res.send(allImmunisations); //return res.render('index', {items: allTasks});
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

// Returns information about a specify country
var getImmunisationById = async (req, res) => {
    const immunisationId = req.body.id;
    try {
        const immunisation = await Immunisation.findById(immunisationId);
        return res.send(immunisation);
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

module.exports = {
    getAllImmunisations,
    getImmunisationById
};