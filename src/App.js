import React, { useState } from "react";
import FComponent from "./FComponent";
import CComponent from "./CComponent";
import { CounterContext } from "./CounterContext";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <FComponent />
        <CComponent />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
