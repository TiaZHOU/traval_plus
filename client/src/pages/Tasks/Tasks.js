import React, { Component } from "react";
import axios from 'axios';
import './Tasks.css';
import Footer from "../../components/Footer/Footer";

const BASE_URL = "https://info30005travelplus.herokuapp.com";

export default class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDate: '',
            taskTime: '',
            taskDescription: '',
            tasks: []
        };
    };

    componentDidMount = () => {
        this.getTask();
    };

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();

        const payload = {
            taskName: this.state.taskName,
            taskDate: this.state.taskDate,
            taskTime: this.state.taskTime,
            taskDescription: this.state.taskDescription,
        };

        axios.post(BASE_URL + '/tasks/', payload)
            .then(response => {
                console.log(response);
                this.resetUserInputs();
                this.getTask();
            });
    };

    resetUserInputs = () => {
        this.setState({
            taskName: "",
            taskDate: "",
            taskTime: "",
            taskDescription: ""
        });
    };

    getTask = () => {
        axios.get(BASE_URL + '/tasks')
            .then((response) => {
                const data = response.data;
                this.setState({tasks: data});
            })
            .catch(() => {
                console.log('Error retrieving data!');
            })
    };

    render() {
        const { taskName, taskDate, taskTime, taskDescription } = this.state;
        const tasks =  this.state.tasks;
        return(
            <div>
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


                    <div className="taskList">
                        <header>Tasks List</header>
                        {tasks.map(task => (
                            <Task key={task._id} {...task} />
                        ))}
                    </div>

                </div>

                <Footer />

            </div>

        );
    }
}

function Task(task) {
    const { _id, taskName, taskDate, taskDescription, isDone } = task;
    if (!task) return null;
    return (
        <div className="task">
            <input type="checkbox" id={taskName}/>
            <label htmlFor={taskName}>
                {taskName}
            </label>
            <p>
                {taskDate}
                {taskDescription}

            </p>
        </div>
    );
}