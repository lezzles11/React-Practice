import React, { Component } from "react";
/**********************************************
 * Events
 * ==================================
 * Noun Extraction: The act of exploring the design / documentation to find its requirements
 *
 * Nouns: (these are then your states)
 *  - Username
 *  - Password
 *  - Password Confirmation
 *  - Email
 *  - List of errors
 ***********************************************/

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      errors: [],
    };
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(
      this
    );
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(
      this
    );
  }
  validateUsernameOnBlur(event) {
    console.log(
      "I should validate whatever is in ",
      event.target.value
    );
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(
      this.validateNotEmpty("Username", username)
    );
    // You binded it earlier, which allows this function to know that this refers to this component
    this.setState({ username, errors });
  }
  // The purpose of this method is just to ensure that this isn't empty, once the user tabs out of the password field
  validatePasswordOnBlur(event) {
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(
      this.validateNotEmpty("Password", password)
    );
    this.setState({ password, errors });
  }
  displayForm() {
    return (
      <form
        className="text-center border border-light p-5"
        action="#!"
      >
        <h4>Blog</h4>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="form-control"
          onBlur={this.validateUsernameOnBlur}
        ></input>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="form-control"
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          id="passwordconfirmation"
          className="form-control"
        ></input>
        <input
          type="text"
          id="email"
          placeholder="Email"
          className="form-control"
        ></input>

        <button
          type="button"
          onClick={this.submitForm}
          className="btn btn-outline-dark waves-effect"
        >
          Add
        </button>
      </form>
    );
  }
  submitForm(event) {
    console.log("Submitting the form now ");
    console.log(event);
  }
  displayErrors() {
    return (
      <div className="errors">
        {this.state.errors.map((error, number) => (
          <p key={`error: ${number}`}>{error}</p>
        ))}
      </div>
    );
  }
  validateNotEmpty(fieldName, value) {
    if (value.length <= 0) {
      return `${fieldName} must be filled out`;
    }
  }
  render() {
    return (
      <div className="container">
        <h2>Blog</h2>
        {this.displayErrors()}
            {this.displayForm() }
            
      </div>
    );
  }
}

export default Blog;
