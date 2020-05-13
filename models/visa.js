var mongoose = require("mongoose");

var visaSchema = new mongoose.Schema({
  country: {type: String},
  visa: {type: Array}
});

module.exports = mongoose.model("visa", visaSchema, "visa");
