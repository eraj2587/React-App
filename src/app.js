import React, { Component } from "react";
import Movies from "./component/movies";

class App extends Component {
  render() {
    return (
      <>
        <main className="container">
          <Movies></Movies>
        </main>
      </>
    );
  }
}

export default App;
