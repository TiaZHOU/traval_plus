var mongoose = require("mongoose");

var alertSchema = new mongoose.Schema({
    country: {type: String},
    lat: {type: Number},
    lng: {type: Number},
    alert_info: {type: String}
});

module.exports = mongoose.model("alert", alertSchema, "alert");