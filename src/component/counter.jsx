import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <div className="row">
        <div className="col-1">
          <h1 className={this.getClasses()}>{this.formatCount()}</h1>
        </div>
        <div className="col-11">
          <button
            onClick={() => onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(this.props.counter)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
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
