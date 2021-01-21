import React, { Component } from "react";

export class BtnComponent extends Component {
  render() {
    const { start, reset, stop, resume, status } = this.props;
    return (
      <div>
        {status === "waiting" ? <button onClick={start}>Start</button> : null}
        {status === "start" ? (
          <>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>reset</button>
          </>
        ) : null}
        {status === "pause" ? (
          <>
            <button onClick={resume}>Resume</button>
            <button onClick={reset}>reset</button>
          </>
        ) : null}
      </div>
    );
  }
}

export default BtnComponent;
