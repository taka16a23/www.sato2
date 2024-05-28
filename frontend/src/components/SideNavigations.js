import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { ServiceFactory } from 'services';
import NewsNavigation from 'components/NewsNavigation';
import SecurityNavigation from 'components/SecurityNavigatoin';
import AboutNavigation from 'components/AboutNavitaion';
import BoardNavigation from 'components/BoardNavigation';


import AliasRoutes from "routes/AliasRoutes";


class SideNavigations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
    }
  }

  render() {
    return (
      <div className="side-area">
        <div className="side-item a23-btn security-portal">
          <NavLink className="a23-btn-label" to={AliasRoutes.SecurityPortal} title="避難の判断に有用な情報です">
            防災統合情報
          </NavLink>
        </div>
        <div className="side-item submenu">
          <ul className="submenu-list">
            <NewsNavigation/>
            <li className="submenu-item">
              <h2 className="submenu-label ">活動報告</h2>
              <ul className="menu-list hide">
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
            <SecurityNavigation/>
            <BoardNavigation/>
            <AboutNavigation/>
          </ul>
        </div>
      </div>

    );
  };
}

export default SideNavigations;
