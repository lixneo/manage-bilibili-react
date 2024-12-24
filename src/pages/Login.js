import React, { Component } from "react";
import { Link } from "react-router-dom";

import Login from "../components/Login";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <Link to="/">
          <i className="iconfont icon-home"></i>
          home
        </Link>
        <div className="container">
          <Login history={history}></Login>
        </div>
      </div>
    );
  }
}
