import React, { useState } from "react";
import { useTasks /*addTask, updateTask, deleteTask*/ } from "./TasksAPI";
import './Tasks.css';

export default function Tasks() {
    const { loading, tasks, error } = useTasks();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return (
        <div>
            <div className="addTask">
                <h3>Add New Task</h3>
                <form>
                    <label htmlFor="task_name">Task name:</label>
                    <input type="text" placeholder="Task name" name="task_name"
                        // value={id}
                        // onChange={event => {
                        //   setId(event.target.value);
                        // }}
                    />
                    <br/>
                    <label htmlFor="task_date">Task date and time:</label>
                    <input type="datetime-local" name="task_date"
                        // value={first_name}
                        // onChange={event => {
                        //   setFirstName(event.target.value);
                        // }}
                    />
                    <br/>
                    <label htmlFor="task_description">Task description:</label>
                    <input type="text" placeholder="Task description (Optional)" name="task_description"
                        // value={first_name}
                        // onChange={event => {
                        //   setFirstName(event.target.value);
                        // }}
                    />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="taskList">
                <h2>Tasks List</h2>
                {tasks.map(task => (
                    <Task key={task._id} {...task} />
                ))}
            </div>
        </div>
    );
}

function Task(task) {
    const { _id, taskName, taskDate, taskDescription, isDone } = task;
    return (
        <div className="info">
            <input type="checkbox" checked={isDone} value="blablabla" /> {taskName} {taskDate}
        </div>
    );
}

/*onChange={} => checkbox*/

    /*function onSubmit() {
        // addAuthor({
        //   id,
        //   first_name,
        //   last_name
        // });
    }*/