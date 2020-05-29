var mongoose = require("mongoose");

var alertSchema = new mongoose.Schema({
    country: {type: String},
    alert_info: {type: String}
});

module.exports = mongoose.model("alert", alertSchema, "alert");