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
    const taskId = req.body.id;
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
    const data = new Task(req.body);
    data.save();
    res.redirect('/travel-tasks');
};

// DELETE tasks by id
var deleteTask = (req, res) => {
    const taskId = req.body.id;
    Task.findByIdAndRemove(taskId).exec();
    res.redirect('/travel-tasks');
};

// PUT tasks
var updateTask = (req, res) => {
    const taskId = req.body.id;
    Task.findById(taskId, (err, doc) => {
        if (err) {
            console.error('error, no task found');
        } else {
            doc.taskName = req.body.taskName;
            doc.taskDate = req.body.taskDate;
            doc.taskDescription = req.body.taskDescription;
            doc.isDone = req.body.isDone;
            doc.save();
        }
    res.redirect('/travel-tasks');
})};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
};