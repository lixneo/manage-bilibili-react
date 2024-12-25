import React, { Component } from "react";
import Header from "../components/index/header";
import Sidebar from "../components/index/sidebar";
import Container from "../components/index/container";
import { NAV } from "../config/config";

import LoginService from "../service/login";
const loginService = new LoginService();

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curIdx: 0,
      field: NAV[0].field,
      title: NAV[0].title,
    };
  }

  async loginCheck() {
    const result = await loginService.loginCheck();
    const errorCode = result.code,
      { history } = this.props;

    if (errorCode === 1006) {
      history.push("/login");
      return;
    }
    history.push("/course");
  }

  onNavItemClick(dataItem, index) {
    const { field, title } = dataItem;

    this.setState({
      field,
      title,
      curIdx: index,
    });
  }

  componentDidMount() {
    this.loginCheck();
  }

  render() {
    const { history, children } = this.props;
    const { curIdx } = this.state;
    return (
      <div className="container">
        <Header history={history} />
        <Sidebar
          curIdx={curIdx}
          onNavItemClick={this.onNavItemClick.bind(this)}
        />
        <Container children={children} />
      </div>
    );
  }
}
