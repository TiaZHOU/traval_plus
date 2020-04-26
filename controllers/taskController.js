const Task = require('../models/task');
const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

// GET tasks
var getAllTasks = (req, res) => {
    res.send(Task);
};

// GET tasks by id
var getTaskById = (req, res) => {
    const foundTask = getElementById(req.params.id, Task);
    if (foundTask) {
        res.send(foundTask);
    } else {
        res.status(404).send();
    }
};

// POST tasks
var createTask = (req, res) => {
    const receivedTask = createElement(req.query, Task);
    if (receivedTask) {
        Task.push(receivedTask);
        res.status(201).send(receivedTask);
    } else {
        res.status(400).send();
    }
};

// DELETE tasks by id
var deleteTask = (req, res) => {
    const taskIndex = getIndexById(req.params.id, Task);
    if (taskIndex !== -1) {
        Task.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
};

// PUT tasks
var updateTask = (req, res) => {
    const taskIndex = getIndexById(req.params.id, Task);
    if (taskIndex !== -1) {
        updateElement(req.params.id, req.query, Task);
        res.send(Task[taskIndex]);
    } else {
        res.status(404).send();
    }
};

module.exports = { getAllTasks, getTaskById, createTask, deleteTask, updateTask };