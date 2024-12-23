import React, { Component } from "react";

import "./index.scss";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <i className="iconfont icon-user"></i>
          <input type="text" className="login-input" placeholder="管理员用户名"></input>
        </div>
        <div className="input-box">
          <i className="iconfont icon-lock"></i>
          <input type="text" className="login-input" placeholder="管理员密码"></input>
        </div>
        <div className="input-box">
          <button className="btn btn-primary">登录后台</button>
        </div>
      </div>
    );
  }
}
