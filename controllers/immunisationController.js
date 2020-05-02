const Immunisation = require("../models/immunisation");
const { getElementById } = require('./utils');

// return immunisation requirements of all countries
const getAllImmunisations = (req, res) => {
    res.send(Immunisation);
};

const getImmunisationByID = (req, res) => {
    const foundImmunisation = getElementById(req.params.id, Immunisation);
    if (foundImmunisation) {
        res.send(foundImmunisation);
    } else {
        res.status(404).send();
    }
};

module.exports = {
    getAllImmunisations,
    getImmunisationByID
};
