var mongoose = require("mongoose");
var Task = mongoose.model("task");

// GET tasks
var getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find();
        return res.send(allTasks); //return res.render('index', {items: allTasks});
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

// GET tasks by id
var getTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
        return res.send(task);
    } catch (err) {
        return res.status(400).send("Database query failed");
    }
};

// POST tasks
var createTask = (req, res) => {
    if(!req.body) { return res.send(400); }
    const data = new Task();
    data.taskName = req.body.taskName;
    data.taskDate = req.body.taskDate;
    data.taskTime = req.body.taskTime;
    data.taskDescription = req.body.taskDescription;
    data.save(function (err, insertedTask) {
        if (err) {
            console.log('Error saving task');
        } else {
            res.json(insertedTask);
        }
    });
};

// DELETE tasks by id
var deleteTask = (req, res) => {
    const taskId = req.params.id;
    Task.findByIdAndRemove(taskId, function (err, task) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send("Deleted!");
        }
    });
};

// PUT tasks
var updateTask = (req, res) => {
    const taskId = req.params.id;
    Task.findById(taskId, (err, doc) => {
        if (err) {
            console.error('error, no task found');
        } else {
            doc.taskName = req.body.taskName;
            doc.taskDate = req.body.taskDate;
            doc.taskDescription = req.body.taskDescription;
            doc.taskTime = req.body.taskTime;
            doc.save();
            res.status(204).send("Updated");
        }
    })};

module.exports = { getAllTasks, getTaskById, createTask, deleteTask, updateTask };