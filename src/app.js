import React, { Component } from "react";
//import Movies from "./component/movies";
import Counters from "./component/counters";
import NavBar from "./component/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 6 },
      { id: 5, value: 7 },
    ],
  };

  handleDelete = (counterParam) => {
    const counterList = this.state.counters.filter(
      (counter) => counter.id !== counterParam.id
    );
    this.setState({ counters: counterList });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter.value++;
    counters[index] = counter;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter.value--;
    counters[index] = counter;
    this.setState({ counters });
  };

  onButtonReset = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((x) => x.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.onButtonReset}
          />
        </main>
      </>
    );
  }
}

export default App;
