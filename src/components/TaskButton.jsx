import React, { Component } from "react";

class TaskButton extends Component {
  
    state = {
      value : '+ Add new Task',
    };

    Buttonstyle = {
      fontSize : 13,
      fontWeight : 'bold',
      margin : 15,
      padding : 10,
      color : '#5168DA',
      background : '#282c34',
    };

    render() {

      return (
      <button className = "btn btn-secondary btn-sm" style = {this.Buttonstyle} >{this.state.value}</button>
      );
    }
}

export default TaskButton;