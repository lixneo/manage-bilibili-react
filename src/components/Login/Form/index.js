import React, { Component } from "react";

import "./index.scss";

import LoginForm from "./LoginForm";
import Title from "./Title";

export default class Form extends Component {
  render() {
    return <div className="form-wrapper">
      <Title/>
      <LoginForm/>
    </div>;
  }
}
