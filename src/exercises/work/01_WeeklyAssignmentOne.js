import React from "react";

function Link({ url, title, tag }) {
  return (
    <div>
      <a
        href={url}
        className="list-group-item list-group-item-action flex-column align-items-start "
        target="_blank"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-2 h5"> {title}</h5>
          <small>Link</small>
        </div>
        <p className="mb-2">#{tag}</p>
      </a>
    </div>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      tag: "",
      filter: "",
      links: [
        {
          id: 1,
          title: "Google",
          tag: "Research",
          url: "https://www.google.com",
        },
        {
          id: 2,
          title: "Stack Overflow",
          tag: "Community",
          url: "https://www.stackoverflow.com",
        },
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(
      this
    );
    this.handleFormSubmit = this.handleFormSubmit.bind(
      this
    );
    this.showAll = this.showAll.bind(this);
    this.showFilteredList = this.showFilteredList.bind(
      this
    );
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const formData = {};
    for (const data in this.refs) {
      formData[data] = this.refs[data].value;
    }
    let newArray = this.state.links;
    let newId = newArray.length + 1;
    let newObject = {
      id: newId,
      title: formData.title,
      tag: formData.tag,
      url: formData.url,
    };
    newArray.push(newObject);
    console.log("New Object: ", newObject);
    this.setState({
      links: newArray,
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  showFilteredList() {
    return (
      <div>
        <h4>Filtered List</h4>
        {this.state.links
          .filter((eachLink) =>
            eachLink.title
              .toLowerCase()
              .includes(this.state.filter)
          )
          .map((eachItem, index) => (
            <Link
              id={eachItem.id}
              key={eachItem.id}
              title={eachItem.title}
              tag={eachItem.tag}
              url={eachItem.url}
            />
          ))}
      </div>
    );
  }
  showAll() {
    return (
      <div>
        {this.state.links.map((eachItem, index) => (
          <Link
            id={eachItem.id}
            key={eachItem.id}
            title={eachItem.title}
            tag={eachItem.tag}
            url={eachItem.url}
          />
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>New Link</h1>
        <form id="form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            ref="title"
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            className="form-control"
            id="title"
            placeholder="Title"
          />
          <input
            type="text"
            ref="url"
            name="url"
            value={this.state.url}
            onChange={this.handleInputChange}
            id="url"
            placeholder="URL"
            className="form-control"
          />
          <input
            type="text"
            name="tag"
            ref="tag"
            onChange={this.handleInputChange}
            value={this.state.tag}
            id="tag"
            placeholder="Tag"
            className="form-control"
          />
          <button
            type="submit"
            className="form-control"
            className="btn btn-outline-dark waves-effect"
          >
            Add Item
          </button>
        </form>
        <div>
          <h5>Find a Link</h5>
          <input
            type="text"
            value={this.state.filter}
            ref="filter"
            placeholder="Filter"
            id="filter"
            name="filter"
            onChange={this.handleInputChange}
          />
          {this.showAll()}
          {this.showFilteredList()}
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
        <Form />
      </div>
    );
  }
}
