import React from "react";

class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState((prevState, props) => ({
      toggle: !prevState.toggle,
    }));
  }
  render() {
    return (
      <div>
        <h1>Weekly Assignment One</h1>
        <div onClick={this.onClick}>
          Name: {this.props.name}
          <br />
          Toggle: {this.state.toggle}
        </div>
      </div>
    );
  }
}
export default class WeeklyAssignmentOne extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Weekly Assignment One</h1>
        <SecondComponent name="Lesley" />
      </div>
    );
  }
}
