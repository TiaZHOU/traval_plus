import React, { Component } from "react";
//import { useTasks, addTask, updateTask, deleteTask*/ } from "./TasksAPI";
import Footer from "../../components/Footer/Footer";
import './Tasks.css';
import axios from 'axios';

const BASE_URL = "https://info30005travelplus.herokuapp.com";

export default class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDate: '',
            taskTime: '',
            taskDescription: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post(BASE_URL + '/tasks/', this.state)
            .then(response => {
                console.log(response);
            });
    };

    render() {
        const { taskName, taskDate, taskTime, taskDescription } = this.state;
        return(
            <div id="body">
                <div className="container">
                    <div className="addTask">
                        <header>Add New Task</header>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <label htmlFor="taskName">Task name:</label>
                                <input type="text" name="taskName" value={taskName} onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskDate">Task date:</label>
                                <input type="date" name="taskDate" value={taskDate} onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskTime">Task time:</label>
                                <input type="time" name="taskTime" value={taskTime} onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskDescription">Task description:</label>
                                <input type="text" name="taskDescription" value={taskDescription} onChange={this.changeHandler} />
                            </div>
                            <button className="button">Submit</button>
                        </form>
                    </div>
                    {/*<div className="taskList">*/}
                    {/*    <header>Tasks List</header>*/}
                    {/*    {tasks.map(task => (*/}
                    {/*        <Task key={task._id} {...task} />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

function Task(task) {
    const { _id, taskName, taskDate, taskDescription, isDone } = task;
    return (
        <div className="task">
            <input type="checkbox" id={taskName}/>
            <label for={taskName}>
                {taskName}
            </label>
            <p>
                {taskDate}
                {taskDescription}
                x
            </p>
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