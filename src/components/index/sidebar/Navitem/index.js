import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default class Navitem extends Component {
  render() {
    const { curIdx, index, dataItem, onNavItemClick } = this.props;

    return (
      <div
        className={["nav-item", index === curIdx ? "nav-current" : ""].join(
          " "
        )}
      >
        <Link
          to={`/${dataItem.field}`}
          onClick={() => onNavItemClick(dataItem, index)}
        >
          {dataItem.title}
          <i className="iconfont icon-right"></i>
        </Link>
      </div>
    );
  }
}
