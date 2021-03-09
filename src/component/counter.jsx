import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        <h1 className={this.getClasses()}>{this.formatCount()}</h1>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <span></span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <span>Zero</span> : value;
  }
}

export default Counter;
