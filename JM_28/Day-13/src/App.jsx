import { useState, useMemo } from "react"
import ListItem from "./components/ListItem"
import VirtualizedList from "./components/VirtualizedList"

function App() {
  const [count, setCount] = useState(0)

  const items = useMemo(() => {
    return Array.from({ length: 500 }, (_, i) => i + 1)
  }, [])

  return (
    <div>
      <h1>Performance Optimization Demo</h1>

      <button onClick={() => setCount(count + 1)}>
        Re-render Count: {count}
      </button>

      <h2>Memoized List</h2>
      <ul>
        {items.map((item) => (
          <ListItem key={item} value={item} />
        ))}
      </ul>

      <h2>Virtualized List</h2>
      <VirtualizedList />
    </div>
  )
}

export default App
