import FetchDemo from "./components/FetchDemo";
import AuthDemo from "./components/AuthDemo";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Custom Hooks Lab</h2>

      <FetchDemo />
      <hr />
      <AuthDemo />
    </div>
  );
}

export default App;
