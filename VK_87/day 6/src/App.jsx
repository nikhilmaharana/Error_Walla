import { useState } from "react";
import ContextDemo from "./pages/ContextDemo";
import ReduxDemo from "./pages/ReduxDemo";

export default function App() {
  const [page, setPage] = useState("context");

  return (
    <div>
      <div style={{ padding: 16, display: "flex", gap: 8 }}>
        <button onClick={() => setPage("context")}>Context Demo</button>
        <button onClick={() => setPage("redux")}>Redux Demo</button>
      </div>

      {page === "context" ? <ContextDemo /> : <ReduxDemo />}
    </div>
  );
}
git 