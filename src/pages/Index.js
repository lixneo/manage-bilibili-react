import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "index",
    };
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>{this.state.title} page</h1>
        <ul>
          <li>
            <Link to="/sub/list">list</Link>
          </li>
          <li>
            <Link to="/sub/detail">detail</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
        {children}
      </div>
    );
  }
}
