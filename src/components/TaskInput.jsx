import React, { Component } from 'react';
import Task from './Task';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
class TaskInput extends Component {
    
    state = {
        tasks : [],
        taskName : '',
        taskDate : '',
    }

    DeleteStyle = {
        fontSize: 15,
        fontWeight: "bold",
        background: "#F90000",
        color: "#000000",
    };

    labelStyle = {
        fontSize : 15,
        fontWeight : "bold",
        margin : 2,
    }

    TextStyle = {
        marginLeft : 20,
        margin : 15,
        padding : 10,
        background : '#282c34',
        color : '#5168DA',
    }

    BarStyle = {
        textAlign: 'center',
        background : '#282c34',
    }
 
    Buttonstyle = {
        fontSize : 13,
        fontWeight : 'bold',
        margin : 15,
        padding : 10,
        color : '#5168DA',
        background : '#282c34',
    };

    CalendarStyle = {
        fontSize : 6,
        fontWeight : 'bold',
        color : '#5168DA',
        background : '#282c34',
    }

    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            taskName : '',
            taskDate : '',
        }
        this.addTask = this.addTask.bind(this);
        this.handleChangeOnName = this.handleChangeOnName.bind(this);
        this.handleChangeOnDate = this.handleChangeOnDate.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.DeleteButton = this.DeleteButton.bind(this);
    }

    handleChangeOnName = (event) => {
        this.setState({taskName : event.target.value});
    }

    handleChangeOnDate = (event) => {
        this.setState({taskDate : event.target.value});
    }

    addTask = () => {

        let taskName = this.state.taskName;
        let taskDate = this.state.taskDate;
        
        let identifier = Math.random().toFixed(4);
        let newTask = {id : identifier, name : taskName, date : taskDate, complete : false};

        this.setState(prevState => ({
            tasks : [...prevState.tasks, newTask],
        }));
    }

    removeTask = (id) => {

        let filter = this.state.tasks;
        filter = filter.filter((t) => t.id !== id);

        filter.forEach((t) => console.log(t));
        this.setState({
            tasks : filter,
        });  
    }

    completeTask = (id) => {

        const newList = this.state.tasks.map((item) => {
            if(item.id !== id) {
               return {...item };
            }
            return  {...item, complete : !item.complete };
         });

        this.setState({
            tasks : newList,
        });
    }

    DeleteButton = (id) => {

        let del;
        let extra;
        let filter = this.state.tasks;
        filter.forEach((t) => {
            if (t.id === id) {
                del = t;
            }
        })

        if (del.complete) {
            extra = (<button className = "badge m-1 badge-warning" style = {this.DeleteStyle}
                onClick = {() => this.removeTask(id)} >Delete</button>)
        }
        else extra = <label style = {this.labelStyle}>task done?</label>

        return extra;
    };

    renderTasks() {
        let i = 0;
        let taskList = this.state.tasks.map((task) => {
                return (
                  <li key = {i++} >
                      <div>
                      <Task name = {task.name} date = {task.date} complete = {task.status} id = {task.id}
                        extra = {this.DeleteButton} onComplete = {this.completeTask} />
                      </div>
                  </li>
                );
        });

        return taskList;
    }

    render() {

        let taskList = this.renderTasks();

        return (
            <div className = "main">

                <div className = "taskInput" style = {this.BarStyle}>
                    
                    <button className = "btn btn-secondary btn-sm" 
                        style = {this.Buttonstyle} onClick = {this.addTask}>
                        + Add Task</button>
                    
                    <input type = "text" placeholder = "task to be done" onChange = {this.handleChangeOnName}
                        style = {this.TextStyle} />
                    
                    <input type = "text" placeholder = "deadline"  onChange = {this.handleChangeOnDate}
                         style = {this.TextStyle}/>
                </div>

            <ol>{taskList}</ol>
            </div>
        );
    }
}

export default TaskInput;