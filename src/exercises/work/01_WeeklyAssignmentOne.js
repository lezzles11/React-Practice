import React from "react";

function Link({ text }) {
  return <li className="list-group-item">{text}</li>;
}

function LinkGroup() {
  return (
    <div className="font1">
      <ul className="list-group">
        <Link text="Janice" />
        <Link text="Prithvi" />
        <Link text="Lesley" />
        <Link text="Anubhav" />
      </ul>
    </div>
  );
}

function Layout() {
  const border = {
    color: "red",
    borderStyle: "solid",
  };
  const imageStyle = {
    width: "100%",
  };
  return (
    <div className="container">
      <div className="row">
        <div style={border} className="col-3">
          <div className="row">
            <img
              className="img-fluid"
              style={imageStyle}
              src="https://www.cerclemagazine.com/wp-content/uploads/2017/10/316_N-Atlantic-Ocean-Cliffs-of-Moher-1989.jpg"
            />
            <div className="row">
              King of JS <br />
              420 Fav Links <br />
              69 Shared Links
              <br />
              <br />
            </div>
            <div className="row">
              <button
                type="button"
                className="btn btn-outline-dark waves-effect"
              >
                Add Link
              </button>
            </div>
          </div>
        </div>
        <div style={border} className="col-7">
          <div className="row align-self-end">
            <input type="text" placeholder="Search" />
          </div>
          <div className="row">
            <h2>Links for #React</h2>
          </div>
          <br />
          <LinkGroup />
        </div>
      </div>
    </div>
  );
}

export default class WeeklyAssignmentOne extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Weekly Assignment One</h1>
        <Layout />
      </div>
    );
  }
}
