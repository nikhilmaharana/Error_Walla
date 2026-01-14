import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./redux/counterSlice"

function App() {
  const { user } = useContext(UserContext)
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Context User: {user}</h2>

      <h2>Redux Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default App
