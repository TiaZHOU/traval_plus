var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
    taskName: {type: String, required: true},
    taskDate: {type: String, required: true},
    taskDescription: String,
    isDone: Boolean
});

module.exports = mongoose.model("task", taskSchema, "task");