import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
      payload: {},
    });
  };

  const increaseHandler = (value) => {
    dispatch({
      type: "increase",
      payload: {
        value: value,
      },
    });
  };

  const decreaseHandler = (value) => {
    dispatch({
      type: "decrease",
      payload: {
        value: value,
      },
    });
  };

  return (
    <main className={classes.counter}>
      {showCounter && <h1>Redux Counter</h1>}
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => increaseHandler(1)}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increase by 5</button>
        <button onClick={() => decreaseHandler(1)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
