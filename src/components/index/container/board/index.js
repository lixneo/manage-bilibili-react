import React, { Component } from "react";
import "./index.scss";

export default class Border extends Component {
  render() {
    const { children } = this.props;
    return <div className="page-border">{children}</div>;
  }
}
