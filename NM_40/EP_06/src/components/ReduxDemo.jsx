import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const ReduxDemo = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h3>Redux Toolkit Demo</h3>
      <p>Counter: {count}</p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default ReduxDemo;
