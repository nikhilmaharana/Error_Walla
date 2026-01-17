import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../redux/features/counter/counterSlice";
import { useState } from "react";

export default function ReduxDemo() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(5);

  return (
    <div style={{ padding: 16 }}>
      <h2>Redux Toolkit Demo</h2>
      <p>Count: <b>{count}</b></p>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <hr />

      <input
        type="number"
        value={amt}
        onChange={(e) => setAmt(Number(e.target.value))}
        style={{ width: 80 }}
      />
      <button onClick={() => dispatch(incrementByAmount(amt))}>
        Add Amount
      </button>
    </div>
  );
}
