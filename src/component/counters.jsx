import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <>
        <button className="btn btn-primary" onClick={onReset}>
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
