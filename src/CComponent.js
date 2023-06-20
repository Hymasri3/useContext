import React from "react";
import { CounterContext } from "./CounterContext";

class CComponent extends React.Component {
  render() {
    return (
      <div>
        <CounterContext.Consumer>
          {(value) => {
            return <h1>{value}</h1>;
          }}
        </CounterContext.Consumer>
      </div>
    );
  }
}
export default CComponent;
