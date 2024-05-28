import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import AliasRoutes from "routes/AliasRoutes";


class SecurityNavigation extends Component {

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
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>防犯・防災</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          <li className="memu-item">
            <NavLink className="menu-label" to={AliasRoutes.SecurityPortal} alt="防災統合情報" title="防災統合情報を見る">
              防災統合情報
            </NavLink>
          </li>
          <li className="memu-item">
            <NavLink className="menu-label" to={AliasRoutes.SecurityKnowledge} alt="防災予備知識" title="防災予備知識を見る">
              防災予備知識
            </NavLink>
          </li>
        </ul>
      </li>
    );
  };
}

export default SecurityNavigation;
