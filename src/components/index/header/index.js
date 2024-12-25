import React, { Component } from "react";
import "./index.scss";

import HeaderLogout from "./Logout";
import HeaderLogo from "./Logo";
import HeaderTitle from "./HeaderTitle";

export default class Header extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="header">
        <HeaderLogo></HeaderLogo>
        <HeaderTitle></HeaderTitle>
        <HeaderLogout history={history}></HeaderLogout>
      </div>
    );
  }
}
