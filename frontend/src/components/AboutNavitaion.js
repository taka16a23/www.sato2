import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import AliasRoutes from "routes/AliasRoutes";


class AboutNavigation extends Component {

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
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>自治会案内</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          <li className="memu-item">
            <NavLink className="menu-label" to={AliasRoutes.AboutRule} alt="会則" title="会則を見る">
              会則
            </NavLink>
          </li>
          <li className="memu-item">
            <NavLink className="menu-label" to={AliasRoutes.AboutHall} alt="里公民館" title="里公民館を見る">
              里公民館
            </NavLink>
          </li>
          <li className="memu-item">
            <NavLink className="menu-label" to={AliasRoutes.AboutGroup} alt="ブロックと組" title="ブロックと組を見る">
              ブロックと組
            </NavLink>
          </li>
          <li className="memu-item">
            <NavLink className="menu-label" to={AliasRoutes.AboutQuery} alt="情報提供・問い合わせ" title="情報提供・問い合わせを見る">
              情報提供・問い合わせ
            </NavLink>
          </li>
        </ul>
      </li>
    );
  };
}

export default AboutNavigation;
