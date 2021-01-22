import React, { Component } from "react";
import "./App.css";
import BtnComponent from "./Components/BtnComponent";
import DisplayComponent from "./Components/DisplayComponent";

export class App extends Component {
  state = {
    h: 0,
    m: 0,
    s: 0,
    ms: 0,
    status: "waiting",
  };

  timer = null;

  start = () => {
    this.timer = setInterval(() => {
      this.run();
    }, 10);
    this.setState({ status: "start" });
  };

  run = () => {
    const { h, m, s, ms } = this.state;
    this.setState({ ms: ms + 1 });
    if (ms === 100) {
      this.setState({ ms: 0, s: s + 1 });
    }
    if (s === 60) {
      this.setState({ s: 0, m: m + 1 });
    }
    if (m === 60) {
      this.setState({ m: 0, h: h + 1 });
    }
  };

  reset = () => {
    clearInterval(this.timer);
    this.setState({ ms: 0, s: 0, m: 0, h: 0, status: "waiting" });
  };

  resume = () => {
    this.start();
  };

  stop = () => {
    clearInterval(this.timer);
    this.setState({ status: "pause" });
  };

  render() {
    const { h, m, s, ms, status } = this.state;
    return (
      <div className="app">
        <div className="stopwatch">
          <DisplayComponent h={h} m={m} s={s} ms={ms} />
          <BtnComponent
            status={status}
            start={this.start}
            reset={this.reset}
            resume={this.resume}
            stop={this.stop}
          />
        </div>
      </div>
    );
  }
}

export default App;
