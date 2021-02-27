import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  render() {
    return (
      <React.Fragment>
        <h1 className={this.getClasses()}>{this.formatCount()}</h1>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
