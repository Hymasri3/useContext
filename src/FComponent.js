import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
function FComponent() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h1>Function Component</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <Fchild />
    </div>
  );
}

const Fchild = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <h1>Function child Component</h1>
      <h1>{counter}</h1>
    </div>
  );
};

export default FComponent;
