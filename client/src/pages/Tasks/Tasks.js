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
            taskId: '',
            error: false
        };
    };

    componentDidMount = () => {
        this.getTask();
    };

    // Tracking input in input boxes
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value });
    };

    // Posts task to database
    submitHandler = (e) => {
        e.preventDefault();
        if(!this.state.taskName || !this.state.taskDate || !this.state.taskTime) {
            this.setState({error: true});
        } else {
            this.setState({error: false});
        }

        const payload = {
            taskName: this.state.taskName,
            taskDate: this.state.taskDate,
            taskTime: this.state.taskTime,
            taskDescription: this.state.taskDescription,
        };

        axios.post(BASE_URL + '/tasks/', payload)
            .then(response => {
                this.resetUserInputs();
                this.getTask();
            });
    };

    // Resets all input boxes
    resetUserInputs = () => {
        this.setState({
            taskName: "",
            taskDate: "",
            taskTime: "",
            taskDescription: ""
        });
    };

    // Get all tasks from database
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

    // Finds one specific task
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

    // Updates task via put request
    updateTask = (e) => {
        e.preventDefault();
        if(!this.state.taskName || !this.state.taskDate || !this.state.taskTime) {
            this.setState({error: true});
        } else {
            this.setState({error: false});
        }
        const payload = {
            taskName: this.state.taskName,
            taskDate: this.state.taskDate,
            taskTime: this.state.taskTime,
            taskDescription: this.state.taskDescription,
        };

        axios.put(BASE_URL + '/tasks/' + this.state.taskId, payload)
            .then(response => {
                console.log(response);
                this.resetUserInputs();
                this.getTask();
                this.setState({isUpdate: false, taskId:''});
            });
    };

    // Renders tasks in task list
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
                    <span className="details">Due: {taskDate}, {taskTime}
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
            <div className="taskPage">
                <div className="container">

                    <div className="addTask">
                        <header>{this.state.isUpdate ? <>Edit</> : <>Add</> } task</header>
                        <form onSubmit={this.state.isUpdate ? this.updateTask : this.submitHandler}>
                            <div>
                                <label htmlFor="taskName">Task Name <span id="asterisk">*</span></label>
                                <input type="text"
                                       name="taskName"
                                       value={taskName}
                                       onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskDate">Task Date <span id="asterisk">*</span></label>
                                <input type="date"
                                       name="taskDate"
                                       value={taskDate}
                                       onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskTime">Task Time <span id="asterisk">*</span></label>
                                <input type="time"
                                       name="taskTime"
                                       value={taskTime}
                                       onChange={this.changeHandler} />
                            </div>
                            <div>
                                <label htmlFor="taskDescription">Task Description</label>
                                <input type="text"
                                       className="desc"
                                       name="taskDescription"
                                       value={taskDescription}
                                       onChange={this.changeHandler} />
                            </div>
                            {this.state.isUpdate ? <button className="button">Update</button> :
                                <button className="button">Submit</button>}
                            <span className="error">{this.state.error ?
                                <p>Please fill in the required fields.</p> :
                                <></>}</span>
                        </form>
                    </div>

                    <div className="taskList">
                        <header>Tasks List</header>
                        {loading ? <p>Loading...</p> :
                            tasks.map(task => (
                                this.displayTask(task)
                            ))}

                        {this.state.tasks.length === 0 && !loading ?
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