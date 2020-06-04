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
            tasks: [],
            loading: true,
            isUpdate: false,
            taskId: ''
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
                this.setState({tasks: data, loading: false });
            })
            .catch(() => {
                console.log('Error retrieving data!');
            })
    };

    findTaskById = (_id) => {
        axios.get(BASE_URL + '/tasks/' + _id)
            .then(response => {
                if(response != null) {
                    this.setState({ isUpdate: true, taskId: _id });
                    this.setState({
                        taskName: response.data.taskName,
                        taskDate: response.data.taskDate,
                        taskTime: response.data.taskTime,
                        taskDescription: response.data.taskDescription
                    })
                }
            }).catch((err) => {
                console.error('Error: '+ err);
        })
    };

    deleteTask = (_id) => {
        axios.delete(BASE_URL + '/tasks/' + _id)
            .then(response => {
               if(response.data != null) {
                   this.setState({
                       tasks: this.state.tasks.filter(task => task._id !== _id)
                   });
               }
            })
            .catch((error) => {
                throw error.response.data
            });
    };

    updateTask = (e) => {
        e.preventDefault();

        const payload = {

            taskName: this.state.taskName,
            taskDate: this.state.taskDate,
            taskTime: this.state.taskTime,
            taskDescription: this.state.taskDescription,
        };

        axios.put(BASE_URL + '/tasks/' + this.taskId, payload)
            .then(response => {
                console.log(response);
                this.resetUserInputs();
                this.getTask();
            });
    };

    displayTask = (task) => {
        const { _id, taskName, taskDate, taskTime, taskDescription } = task;
        if (!task) return null;
        return (
            <div className="task" key={_id}>
                <span className="icons">
                    <i className="fas fa-edit" onClick={ () => {this.findTaskById(_id)} }/>
                    <i className="fas fa-times"  onClick={ () => this.deleteTask(_id) }/>
                </span>
                <input type="checkbox" id={_id} />
                <label htmlFor={_id}>
                        <i className="fas fa-check" />
                    {taskName}
                    <span className="details">{taskDate}, {taskTime}
                    <br/>
                        {taskDescription}</span>
                </label>
            </div>
        );

    };

    render() {
        const { taskName, taskDate, taskTime, taskDescription } = this.state;
        const { tasks, loading } =  this.state;
        return(
            <div>
                <div className="container">

                    <div className="addTask">
                        <header>Add New Task</header>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <label htmlFor="taskName">Task name</label>
                                <input type="text" name="taskName" value={taskName} onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskDate">Task date</label>
                                <input type="date" name="taskDate" value={taskDate} onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskTime">Task time</label>
                                <input type="time" name="taskTime" value={taskTime} onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskDescription">Task description</label>
                                <input type="text" name="taskDescription" value={taskDescription} onChange={this.changeHandler} />
                            </div>
                            {this.state.isUpdate ? <button className="button" onClick={this.updateTask}>Update</button> :
                                <button className="button">Submit</button>}
                        </form>
                    </div>

                    <div className="taskList">
                        <header>Tasks List</header>
                        {loading ? <p>Loading...</p> :
                            tasks.map(task => (
                                this.displayTask(task)
                            ))}

                        {this.state.tasks.length == 0 ?
                            <p>Add a task!</p> : <p/>
                        }

                        <footer />
                    </div>
                </div>
                <Footer />

            </div>

        );
    }
}