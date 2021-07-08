import { React, Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    //console.log("Increment Clicked  " + counter.id);

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {};

  handleDelete = (counterId) => {
    console.log("event handlercalled" + counterId);
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
