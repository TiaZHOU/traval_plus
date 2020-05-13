import React, { useState } from "react";
import './Task.css';

export default function Task() {

    function onSubmit() {
        // addAuthor({
        //   id,
        //   first_name,
        //   last_name
        // });
    }

    return (
        <div className="addTask">
            <h3>Add New Task</h3>
            <form>
                <label for="task_name">Task name:</label>
                <input type="text" placeholder="Task name" name="task_name"
                    // value={id}
                    // onChange={event => {
                    //   setId(event.target.value);
                    // }}
                />
                <br />
                <label for="task_date">Task date and time:</label>
                <input type="datetime-local" name="task_date"
                    // value={first_name}
                    // onChange={event => {
                    //   setFirstName(event.target.value);
                    // }}
                />
                <br />
                <label for="task_description">Task description:</label>
                <input type="text" placeholder="Task description (Optional)" name="task_description"
                    // value={first_name}
                    // onChange={event => {
                    //   setFirstName(event.target.value);
                    // }}
                />
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}