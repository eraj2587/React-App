import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.props.onReset}>
          Reset
        </button>
        <ul>
          {this.props.counters.map((counter) => (
            <li key={counter.id}>
              <Counter
                key={counter.id}
                counter={counter}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Counters;
