import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <button
          onClick={this.props.decrement}
          type="button"
          className="btn btn-outline-dark waves-effect"
        >
          -
        </button>
        {this.props.count}
        <button
          onClick={this.props.increment}
          type="button"
          className="btn btn-outline-dark waves-effect"
        >
          +
        </button>
      </div>
    );
  }
}
function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA =
      typeof a[key] === "string"
        ? a[key].toUpperCase()
        : a[key];
    const varB =
      typeof b[key] === "string"
        ? b[key].toUpperCase()
        : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          name: "Lesley",
          count: 0,
        },
        {
          name: "Sam",
          count: 2,
        },
      ],
    };
  }
  handleClickPlus(i) {
    let newObj = {
      ...this.state.counters[i],
      count: this.state.counters[i].count + 1,
    };
    let newArray = [...this.state.counters]; // construct a new array instead of mutating this.state.counters (immutability !!!!)
    newArray[i] = newObj;

    newArray = newArray.sort(
      compareValues("count", "desc")
    );
    console.log("New Array: ", newArray);
    this.setState({
      counters: newArray,
    });
  }
  handleClickMinus(i) {
    let newObj = {
      ...this.state.counters[i],
      count: this.state.counters[i].count - 1,
    };
    let newArray = [...this.state.counters];
    console.log(newArray);
    newArray[i] = newObj;

    newArray = newArray.sort(
      compareValues("count", "desc")
    );

    console.log("New Array: ", newArray);
    this.setState({
      counters: newArray,
    });
  }
  render() {
    return (
      <div>
        <h4>Leaderboard</h4>
        {this.state.counters.map((counter, index) => (
          <Counter
            count={counter.count}
            name={counter.name}
            key={index}
            increment={() => this.handleClickPlus(index)}
            decrement={() => this.handleClickMinus(index)}
          />
        ))}
      </div>
    );
  }
}
