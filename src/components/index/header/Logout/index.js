import React, { Component } from "react";
import "./index.scss";

import LoginService from "../../../../service/login";
const loginService = new LoginService();

export default class HeaderLogout extends Component {
  async onLogoutClick() {
    const cfm = window.confirm("确定要退出登录吗？");

    if (cfm) {
      const result = await loginService.logout();
      const errorCode = result.code;
      if (errorCode === 0) {
        console.log("logout success");

        const { history } = this.props;
        history.push("/login");
      }
    }
  }

  render() {
    return (
      <h1 className="logout" onClick={() => this.onLogoutClick()}>
        安全退出
      </h1>
    );
  }
}
