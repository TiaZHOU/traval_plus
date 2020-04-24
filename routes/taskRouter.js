var express = require('express');
var taskRouter = express.Router();
var taskController = require('../controllers/taskController');

taskRouter.get('/', taskController.getAllTasks); // get all tasks

taskRouter.get('/:id', taskController.getTaskById); // get task by id

taskRouter.post('/', taskController.createTask); // create new task

taskRouter.put('/:id', taskController.updateTask); // update task

taskRouter.delete('/:id', taskController.deleteTask); // delete task

module.exports = taskRouter;