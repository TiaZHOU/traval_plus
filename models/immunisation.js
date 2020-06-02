var mongoose = require("mongoose");

var immunisationSchema = new mongoose.Schema({
    country: {type: String},
    immunisation_req: {type: Array},
    immunisation_info: {type: Array}
});

module.exports = mongoose.model("immunisation", immunisationSchema, "immunisation");