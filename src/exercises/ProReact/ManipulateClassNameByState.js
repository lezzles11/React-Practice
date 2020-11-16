import React from "react";

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
  render() {
    return (
      <div>
        <h5 className={this.getClassName(this.state.count)}>
          Manipulate Methods
        </h5>
      </div>
    );
  }
}
