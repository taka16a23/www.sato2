import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { ServiceFactory } from 'services';
import NewsNavigation from 'components/NewsNavigation';
import SecurityNavigation from 'components/SecurityNavigatoin';
import AboutNavigation from 'components/AboutNavitaion';

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
            <li className="submenu-item">
              <h2 className="submenu-label ">回覧板</h2>
              <ul className="menu-list hide">
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2004" title="2004年の回覧を表示する">2004年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2005" title="2005年の回覧を表示する">2005年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2007" title="2007年の回覧を表示する">2007年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2008" title="2008年の回覧を表示する">2008年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2010" title="2010年の回覧を表示する">2010年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2012" title="2012年の回覧を表示する">2012年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2013" title="2013年の回覧を表示する">2013年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2014" title="2014年の回覧を表示する">2014年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2015" title="2015年の回覧を表示する">2015年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2016" title="2016年の回覧を表示する">2016年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2017" title="2017年の回覧を表示する">2017年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2018" title="2018年の回覧を表示する">2018年</a>
                </li>
                <li className="memu-item">
                  <a className="menu-label" href="/board/?year=2023" title="2023年の回覧を表示する">2023年</a>
                </li>
              </ul>
            </li>
            <AboutNavigation/>
          </ul>
        </div>
      </div>

    );
  };
}

export default SideNavigations;
