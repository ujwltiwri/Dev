import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        "Hello",
        "Hii",
        "Kaise Gai",
        "Shalu",
        "Jalu",
        "fjsdklfjhklsdgfkhsdfjkghjdkfhgkj",
      ],
      currTask: "",
    };
  }

  handleAddTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.currTask],
    });
  };

  handleChange = (e) => {
    this.setState({
      currTask: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="task"
          placeholder="Enter Task Here..."
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddTask}>Add</button>
        {this.state.tasks.map((task) => {
          return (
            <li>
              <p>{task}</p>
              <button>Delete</button>
            </li>
          );
        })}
      </div>
    );
  }
}
