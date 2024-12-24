import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../service/login";
import Header from "../components/index/header";

const loginService = new LoginService();

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "index",
    };
  }

  async loginCheck() {
    const result = await loginService.loginCheck();
    const errorCode = result.code;

    if (errorCode === 1006) {
      const { history } = this.props;
      history.push("/login");
    }
  }

  onLogoutClick() { 
    const cfm = window.confirm("确定要退出登录吗？");

    if (cfm) {
      const result = loginService.logout();
      const errorCode = result.code;
      if (errorCode === 0) {
        const { history } = this.props;
        history.push("/login");
      }
    }
  }

  componentDidMount() {
    this.loginCheck();
  }

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Header />
        {/* <h1>{this.state.title} page</h1>
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
          <li>
            <button onClick={() => this.onLogoutClick()}>退出登录</button>
          </li>
        </ul>
        {children} */}
      </div>
    );
  }
}
