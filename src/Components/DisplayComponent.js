import React, { Component } from "react";

export class DisplayComponent extends Component {
  render() {
    const { h, m, s, ms } = this.props;
    return (
      <div>
        <span>{h}</span>&nbsp;:&nbsp;
        <span>{m}</span>&nbsp;:&nbsp;
        <span>{s}</span>&nbsp;:&nbsp;
        <span>{ms}</span>
      </div>
    );
  }
}

export default DisplayComponent;
