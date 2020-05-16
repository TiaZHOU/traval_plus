var mongoose = require("mongoose");

var visaSchema = new mongoose.Schema({
  destination: {type: String},
  visa_requirement: {type: Array}
});

module.exports = mongoose.model("visa", visaSchema, "visa");
