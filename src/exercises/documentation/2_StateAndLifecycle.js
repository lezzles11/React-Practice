import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Clock is initialized with the current time
    this.state = {
      date: new Date(),
    };
  }
  // Set up a timer whenever the DOM for the first time
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
    
  // Clear that timer
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("unmountme");
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h4>Clock</h4>
        <h5>
          It is {this.state.date.toLocaleTimeString()}
        </h5>
      </div>
    );
  }
}
function Row({ vocab, when, example }) {
  return (
    <tr>
      <td>{vocab}</td>
      <td>{when}</td>
      <td>{example}</td>
    </tr>
  );
}
function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Vocab</th>
          <th>When to use </th>
          <th>In clock example</th>
        </tr>
        <Row
          vocab="componentDidMount()"
          when="Runs after the component has been rendered"
          example="this.timerID = setInterval(() => this.tick(),
          1000);"
        />
        <Row vocab="" when="" example="" />
      </tbody>
    </table>
  );
}

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor is called");
    this.state = {
      cycle: 0,
    };
    // adds one to the state every second
    setInterval(
      () =>
        this.setState({
          cycle: this.state.cycle + 1,
        }),
      1000
    );
  }
  componentDidMount() {
    console.log("3. Component did mount");
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("4. Component will unmount");
  }
  render() {
    console.log("2. Render");
    return (
      <div>
        <h4>Lifecycle</h4>
        {this.state.cycle}
      </div>
    );
  }
}
export default class StateAndLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: false,
    };
    this.removeClock = this.removeClock.bind(this);
  }
  removeClock() {
    this.setState({
      showClock: !this.state.showClock,
    });
  }
  render() {
    return (
      <div>
        <h3>State And Lifecycle</h3>
        <div>
          {" "}
          {this.state.showClock === true && (
            <div>
              {" "}
              <Clock />
            </div>
          )}
          <button onClick={this.removeClock}>Remove</button>
        </div>
        <Table />
      </div>
    );
  }
}
