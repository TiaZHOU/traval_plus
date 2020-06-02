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
        <div className="container">
            <div className="addTask">
                <header>Add New Task</header>
                <form>
                    <label htmlFor="task_name">Task name:</label>
                    <input type="text" placeholder="Task name" name="task_name"
                        // value={id}
                        // onChange={event => {
                        //   setId(event.target.value);
                        // }}
                    />
                    <br />
                    <label htmlFor="task_date">Task date:</label>
                    <input type="date" name="task_date"
                        // value={first_name}
                        // onChange={event => {
                        //   setFirstName(event.target.value);
                        // }}
                    />
                    <br />
                    <label htmlFor="task_time">Task time:</label>
                    <input type="time" name="task_time"
                        // value={first_name}
                        // onChange={event => {
                        //   setFirstName(event.target.value);
                        // }}
                    />
                    <br />
                    <label htmlFor="task_description">Task description:</label>
                    <input type="text" placeholder="Task description (Optional)" name="task_description"
                        // value={first_name}
                        // onChange={event => {
                        //   setFirstName(event.target.value);
                        // }}
                    />
                    <br/>
                    <input type="submit" value="Submit" className="button"/>
                </form>
            </div>
            <div className="taskList">
                <header>Tasks List</header>
                {tasks.map(task => (
                    <Task key={task._id} {...task} />
                ))}
                <footer></footer>
            </div>
        </div>
    );
}

function Task(task) {
    const { _id, taskName, taskDate, taskDescription, isDone } = task;
    return (
        <div className="info">
            <input type="checkbox" id={taskName}/>
            <label for={taskName}>{taskName} {taskDate} {taskDescription}</label>
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