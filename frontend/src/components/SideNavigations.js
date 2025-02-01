import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import NewsNavigation from 'components/NewsNavigation';
import ActivityNavigation from 'components/ActivityNavigation';
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
            <ActivityNavigation/>
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
