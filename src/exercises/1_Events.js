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
  }
  validateUsernameOnBlur(event) {
    console.log(
      "I should validate whatever is in ",
      event.target.value
    );
  }
  displayForm() {
    return (
      <form
        class="text-center border border-light p-5"
        action="#!"
      >
        <h4>Blog</h4>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          class="form-control"
          onBlur={this.validateUsernameOnBlur}
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
        ></input>
        <label for="passwordconfirmation">
          Password Confirmation
        </label>
        <input
          type="password"
          id="passwordconfirmation"
          class="form-control"
        ></input>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          class="form-control"
        ></input>
      </form>
    );
  }
  submitForm(event) {
    console.log("Submitting the form now ");
    console.log(event);
  }
  render() {
    return (
      <div className="container">{this.displayForm()}</div>
    );
  }
}

export default Blog;
