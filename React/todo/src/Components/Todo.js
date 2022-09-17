import "./todo.css";
import React, { Component } from "react";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, task: "Todo App" },
        { id: 2, task: "This is Something" },
        { id: 3, task: "This is Something Else" },
        { id: 4, task: "This is Completely Different" },
      ],
      currTask: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      currTask: e.target.value,
    });
  };

  handleAddTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.tasks.length + 1, task: this.state.currTask },
      ],
    });
    let input = document.querySelector(".text-box");
    input.value = "";
  };

  //1st Method to Handle Deletion of Tasks
  handleDelete = (idx) => {
    let newArr = this.state.tasks.filter((taskObj) => taskObj.id !== idx);
    console.log(newArr);
    this.setState({
      tasks: [...newArr],
    });
  };

  //2nd Method to Handle Deletion => Tedious Method
  // handleDelete = (e) => {
  //   let currData = e.target.parentNode.children[0].innerHTML;
  //   let narr = this.state.tasks.filter((taskObj) => {
  //     return taskObj.task != currData;
  //   });
  //   console.log(narr);
  //   this.setState({
  //     tasks: [...narr],
  //   });
  // };

  render() {
    return (
      <div className="todo">
        <div className="entry">
          <input
            className="text-box"
            type="text"
            placeholder="Enter Your Task Here"
            onChange={this.handleChange}
          />
          <button className="add" onClick={this.handleAddTask}>
            Add
          </button>
        </div>
        <ul>
          {this.state.tasks.map((taskObj, idx) => {
            return (
              <li key={taskObj.id}>
                <p>{`${idx + 1} : ${taskObj.task}`}</p>
                <button
                  onClick={() => this.handleDelete(taskObj.id)}
                  className="delete"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
