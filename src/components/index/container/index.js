import React, { Component } from "react";
import "./index.scss";

import Board from "./board";

export default class Container extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="border-container">
        <Board children={children} />
      </div>
    );
  }
}
