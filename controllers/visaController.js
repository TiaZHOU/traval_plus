var mongoose = require("mongoose");
var Visa = mongoose.model("visa");

// Returns information about all countries
var getAllVisas = async (req, res) => {
    try {
        const allVisas = await Visa.find();
        return res.send(allVisas);
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

// Returns information about a specify country
var getVisaByCountry = async (req, res) => {
    const country = req.params.country;
    try {
        const visa = await Visa.find({country: country});
        return res.send(visa);
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

module.exports = {
    getAllVisas,
    getVisaByCountry
};
