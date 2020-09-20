import React, { Component } from "react";

class Task extends Component {

    TextStyle = {
        fontSize: 25,
        fontWeight: "bold",
        background: "#282c34",
        color: "#5168DA",
    };

    render() {

        let id = this.props.id;
        let extra = this.props.extra(id);

        return (
            <div>
                <span id = "Taskname" className = "badge m-2 badge-primary" style = {this.TextStyle}>
                    {this.props.name}</span>
                <span id = "Taskdate" className = "badge m-2 badge-primary" style = {this.TextStyle}>
                    {this.props.date}</span>
                <input id = "status" type = "checkbox" onChange = {() => this.props.onComplete(id)}
                    checked = {this.props.complete} />
                {extra}
            </div>
        );    
    }
}

export default Task;
