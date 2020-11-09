import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import "./styles/style.css";

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
              <Button />
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

function AddAndRender() {
  return (
    <div>
      The purpose of this component is to add to a form, and
      then render this out on a list
      <input type="text" />
      <button type="submit">Add</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <AddAndRender />
      <Layout />
    </div>
  );
}

export default App;
