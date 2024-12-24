import React, { Component } from "react";

import "./index.scss";

import LoginForm from "./LoginForm";
import Title from "./Title";

export default class Form extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="form-wrapper">
        <Title />
        <LoginForm history={history} />
      </div>
    );
  }
}
