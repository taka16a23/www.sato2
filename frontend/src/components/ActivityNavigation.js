import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import AliasRoutes from "routes/AliasRoutes";


class ActivityNavigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  handleOnClick(ev) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <li className="submenu-item">
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>活動報告</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          <li className="memu-item">
            <a className="menu-label" href="/activity/?year=2016" title="2016年の活動を見る">2016年</a>
          </li>
          <li className="memu-item">
            <a className="menu-label" href="/activity/?year=2017" title="2017年の活動を見る">2017年</a>
          </li>
          <li className="memu-item">
            <a className="menu-label" href="/activity/?year=2023" title="2023年の活動を見る">2023年</a>
          </li>
        </ul>
      </li>
    );
  };
}

export default ActivityNavigation;
