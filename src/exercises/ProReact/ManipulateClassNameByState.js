import React from "react";
import oddOnly, {
  sumValues,
  multiply,
  subtract,
} from "../functions/sum";

function asyncAdd(values) {
  return new Promise((callback) =>
    // If you don't add the promise here, then it would be more difficult to 
    setTimeout(() => {
      let total = sumValues(values);
      console.log(`Async Total: ${total}`);
      callback(total);
    }, 500)
  );
}
console.log(asyncAdd([1, 2, 3]));
console.log(sumValues([1, 2, 3]));

export default class ManipulateClassNameByState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
    };
  }
  isEven() {
    return this.state.count % 2 === 0 ? "Even" : "Odd";
  }
  getClassName(val) {
    return val % 2 === 0
      ? "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1";
  }
  handleClick = () =>
    this.setState({
      count: this.state.count + 1,
    });
  render() {
    return (
      <div className="font2">
        <h5 className={this.getClassName(this.state.count)}>
          Manipulate Methods
        </h5>
        <p>{this.state.count}</p>

        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-outline-dark waves-effect"
        >
          Add to Count
        </button>
      </div>
    );
  }
}
