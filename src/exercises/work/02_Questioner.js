import React from "react";

export default class Questioner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    let input = prompt("Write question down here: ");
    this.setState({
      question: input,
    });
  }
  render() {
    return (
      <div>
        <h4>Questioner</h4>
        <button
          type="button"
          onClick={this.handleClick}
          className="btn btn-outline-dark waves-effect"
        >
          Add Question
        </button>
        {this.state.question}
      </div>
    );
  }
}
