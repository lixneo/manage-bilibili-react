import React, { Component } from "react";
import "./index.scss";

import { NAV } from "../../../config/config";

import Navitem from "./Navitem";

export default class Sidebar extends Component {
  render() {
    const { curIdx, onNavItemClick } = this.props;
    return (
      <div className="sidebar">
        {NAV.map((item, index) => {
          return (
            <Navitem
              key={index}
              index={index}
              dataItem={item}
              curIdx={curIdx}
              onNavItemClick={onNavItemClick}
            />
          );
        })}
      </div>
    );
  }
}
