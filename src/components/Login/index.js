import React, { Component } from "react";
import "./index.scss";

import Axios from "axios";

import Logo from "./Logo";
import Form from "./Form";

export default class Login extends Component {
  getCourseData() {
    Axios.get("http://localhost:4000/get_courses").then((response) => {
      console.log(response.data);
    });
  }

  componentDidMount() {
    // this.getCourseData();
  }

  render() {
    const { history } = this.props;
    return (
      <div className="login-container">
        <Logo />
        <Form history={history} />
      </div>
    );
  }
}
