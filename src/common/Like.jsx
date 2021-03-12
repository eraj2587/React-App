import React, { Component } from "react";
class Like extends Component {
  render() {
    const className =
      this.props.isLike === true ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <i
        className={className}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
        onClick={this.props.onclick}
      ></i>
    );
  }
}

export default Like;
