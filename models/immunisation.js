var mongoose = require("mongoose");

var immunisationSchema = new mongoose.Schema({
    country: {type: String},
    immunisations: {type: Array}
});

module.exports = mongoose.model("immunisation", immunisationSchema, "immunisation");