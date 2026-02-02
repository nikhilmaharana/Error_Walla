import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0
  })

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  return (
    <div style={{ padding: "20px" }}>
      <h1>Offline Demo</h1>
      <p>Counter persists even offline:</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App
