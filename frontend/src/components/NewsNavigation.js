import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import { ServiceFactory } from 'services';
import AliasRoutes from "routes/AliasRoutes";


class NewsNavigation extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      isActive: false,
      modelLength: this.years.length,
    }
  }

  componentDidMount() {
    var newsService = ServiceFactory.createNewsService();
    newsService.listYears().then(years => {
      this.years = years;
      this.setState({
        yearsLength: this.years.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  handleOnClick(year) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <li className="submenu-item">
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>過去のおしらせ</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          {this.years.map((year) =>
            <li className="memu-item" key={year}>
              <NavLink className="menu-label" to={AliasRoutes.News + "?year=" + year} title={year + "年のおしらせを見る"}>
                {year + "年"}
              </NavLink>
            </li>
          )}
        </ul>
      </li>
    );
  };
}

export default NewsNavigation;
