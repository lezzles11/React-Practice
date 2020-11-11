import React, { Component } from "react";

export default class BlogNoBind extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    errors: [],
  };
  validateUsernameOnBlur = (event) => {
    console.log(
      "I should validate whatever is in ",
      event.target.value
    );
    this.setState();
  };
  displayForm() {
    return (
      <div>
        Username:{" "}
        <input
          type="text"
          placeholder="Username"
          onBlur={this.validateUsernameOnBlur}
        />
        <br />
        Password:{" "}
        <input placeholder="Password" type="password" />
        <br />
        Password Confirmation:{" "}
        <input
          placeholder="Password Confirmation"
          type="password"
        />
        <br />
        Email: <input type="email" placeholder="Email" />
        <br />
        <br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
  submitForm(event) {
    console.log("Submitting the form now...");

    console.log(event);
  }
  render() {
    return <div>{this.displayForm()}</div>;
  }
}
