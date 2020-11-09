import React, { Component } from "react";

/**********************************************
 * Planning a Component
 * ==================================
 * 1. What do you want it to do?
 *  - keep track of the number of times a button is clicked
 *  - Display count
 * 2. What states are there?
 *  - counter
 * 3. How does the state change?
 *  - Increases and decreases
 *
 ***********************************************/

function InventoryItem({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>$ {price}</p>
    </div>
  );
}
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  renderClickCount() {
    return <p>I've been clicked {this.state.counter}</p>;
  }
  render() {
    return (
      <div>
        <h4>{this.title}</h4>
        <p>{this.renderClickCount()}</p>
        <InventoryItem name="Strawberries" price="10" />
        <InventoryItem name="Grapes" price="15" />
      </div>
    );
  }
}

export default Counter;
