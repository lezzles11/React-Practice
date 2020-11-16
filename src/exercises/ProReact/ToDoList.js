import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lesley",
      list: [
        { task: "Buy Flowers", done: false },
        { task: "Clean House", done: false },
        { task: "Walk Dog", done: false },
        { task: "Cook Dinner", done: false },
      ],
      newTask: "",
    };
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.changeName = this.changeName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.showRows = this.showRows.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };
  changeName = () => {
    this.setState({
      name:
        this.state.name === "Lesley" ? "Andre" : "Lesley",
    });
  };
  updateTask = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };
  addTask = () => {
    // If no items in the list correspond to the new task input
    if (
      !this.state.list.find(
        (eachItem) => eachItem.task === this.state.newTask
      )
    ) {
      // Then add the new object to the list, then set state
      // Reset the newTask input
      this.setState({
        list: [
          ...this.state.list,
          { task: this.state.newTask, done: false },
        ],
        newTask: "",
      });
    }
  };
  // Mark the item as done
  toggleDone = (toggleTask) =>
    this.setState({
      list: this.state.list.map((eachTask) =>
        eachTask.task === toggleTask.task
          ? { ...eachTask, done: !eachTask.done }
          : eachTask
      ),
    });

  showRows = () =>
    this.state.list.map((eachTask) => (
      <tr key={eachTask.task}>
        <td>{eachTask.task}</td>
        <td>
          <Checkbox
            inputProps={{
              "aria-label": "uncontrolled-checkbox",
            }}
            checked={eachTask.done}
            onChange={() => this.toggleDone(eachTask)}
          />
          <button
            className="btn btn-outline-dark waves-effect"
            onClick={() => this.toggleDone(eachTask)}
          >
            Mark As Done
          </button>
        </td>
      </tr>
    ));

  filter = (done) =>
    this.state.list
      .filter((eachItem) => eachItem.done === done)
      .map((eachTask) => (
        <tr key={eachTask.task}>
          <td>{eachTask.task}</td>
          <td>
            <Checkbox
              inputProps={{
                "aria-label": "uncontrolled-checkbox",
              }}
              checked={eachTask.done}
              onChange={() => this.toggleDone(eachTask)}
            />
            <button
              className="btn btn-outline-dark waves-effect"
              onClick={() => this.toggleDone(eachTask)}
            >
              Mark As Done
            </button>
          </td>
        </tr>
      ));
  componentDidUpdate() {
    console.log(this.state.list);
  }
  render() {
    return (
      <div className="container">
        <h3>{this.state.name}'s List </h3>
        <button
          type="button"
          className="btn btn-outline-dark waves-effect"
          onClick={this.changeName}
        >
          Change Name
        </button>
        <input
          className="form-control"
          placeholder="New Item"
          value={this.state.newTask}
          onChange={this.handleInput}
        />
        <button
          type="button"
          onClick={this.addTask}
          className="btn btn-outline-dark waves-effect"
        >
          Add Task
        </button>
        Not Done:{" "}
        {
          this.state.list.filter(
            (eachItem) => !eachItem.done
          ).length
        }
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.showRows()}</tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.filter(true)}</tbody>
        </table>
      </div>
    );
  }
}
