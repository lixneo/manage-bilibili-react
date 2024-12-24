import React, { Component } from "react";
import { trimSpace } from "../../../../utils/tools";
import LoginService from "../../../../service/login";

import "./index.scss";

const loginService = new LoginService();

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  async loginCheck() {
    const result = await loginService.loginCheck();
    const errorCode = result.code;

    if (errorCode === 1007) {
      const { history } = this.props;
      history.push("/");
    }
  }

  onInputTyping(e) {
    const id = e.target.id,
      val = e.target.value;

    this.setState({
      [id]: val,
    });
  }

  async onLoginSubmit(e) {
    const { username, password } = this.state;
    if (!trimSpace(username) || !trimSpace(password)) {
      alert("用户名或密码不能为空");
      return;
    }

    const result = await loginService.login({
      username: trimSpace(username),
      password: trimSpace(password),
    });

    const errorCode = result.code,
      errorMsg = result.message;

    if (errorCode !== 0) {
      alert(errorMsg);
      return;
    }

    alert("登录成功");

    const { history } = this.props;
    history.push("/");
  }

  componentDidMount() {
    this.loginCheck();
  }

  render() {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <label className="iconfont icon-user" htmlFor="username"></label>
          <input
            type="text"
            id="username"
            className="login-input"
            placeholder="管理员用户名"
            onChange={(e) => this.onInputTyping(e)}
          ></input>
        </div>
        <div className="input-box">
          <label className="iconfont icon-lock" htmlFor="password"></label>
          <input
            type="text"
            id="password"
            className="login-input"
            placeholder="管理员密码"
            onChange={(e) => this.onInputTyping(e)}
          ></input>
        </div>
        <div className="input-box">
          <button
            className="btn btn-primary"
            onClick={(e) => this.onLoginSubmit(e)}
          >
            登录后台
          </button>
        </div>
      </div>
    );
  }
}
