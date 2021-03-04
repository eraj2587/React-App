import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 6 },
    ],
  };

  handleDelete = (counterid) => {
    const counterList = this.state.counters.filter(
      (counter) => counter.id !== counterid
    );
    this.setState({ counters: counterList });
  };

  render() {
    return (
      <ul>
        {this.state.counters.map((counter) => (
          <li key={counter.id}>
            <Counter
              key={counter.id}
              value={counter.value}
              id={counter.id}
              onDelete={this.handleDelete}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Counters;
