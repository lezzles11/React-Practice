import "./styles/style.css";
import ReactDocumentationIndex from "./exercises/documentation/0_ReactDocumentationIndex";
import WeeklyAssignmentOne from "./exercises/work/01_WeeklyAssignmentOne";
import Questioner from "./exercises/work/02_Questioner";
import Leaderboard from "./exercises/work/03_Leaderboard";
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
      <ReactDocumentationIndex />
      <WeeklyAssignmentOne />
      <Questioner />
      <Leaderboard />
    </div>
  );
}

export default App;
