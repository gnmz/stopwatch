import React, { Component } from "react";

export class BtnComponent extends Component {
  render() {
    const { start, reset, stop, resume, status } = this.props;
    return (
      <div className="btns">
        {status === "waiting" ? (
          <button onClick={start} className="start-btn">
            Start
          </button>
        ) : null}
        {status === "start" ? (
          <>
            <button onClick={stop} className="stop-btn">
              Stop
            </button>
            <button onClick={reset} className="reset-btn">
              Reset
            </button>
          </>
        ) : null}
        {status === "pause" ? (
          <>
            <button onClick={resume} className="resume-btn">
              Resume
            </button>
            <button onClick={reset} className="reset-btn">
              Reset
            </button>
          </>
        ) : null}
      </div>
    );
  }
}

export default BtnComponent;
