import ContextDemo from "./components/ContextDemo";
import ReduxDemo from "./components/ReduxDemo";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>State Management Lab</h2>

      <ContextDemo />
      <hr />
      <ReduxDemo />
    </div>
  );
}

export default App;
