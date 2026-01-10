import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Runs once when component loads (API fetch)
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => setMessage(data.value));
  }, []);

  // Runs every time count changes
  useEffect(() => {
    console.log("Button clicked", count, "times");
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Click Counter (Level 2 - Hooks)</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>

      <hr />
    </div>
  );
}

export default App;
