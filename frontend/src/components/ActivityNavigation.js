import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { ServiceFactory } from 'services';
import AliasRoutes from "routes/AliasRoutes";
import {
  setActivityYear,
  setActivityModels,
} from 'redux/activity/Action';


class ActivityNavigation extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      isActive: false,
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createActivitiesService();
    service.listYears().then(years => {
      this.years = years;
      this.setState({
        yearsLength: this.years.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  handleOnClick(ev) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  handleOnLinkClick(year) {
    this.props.setActivityYear(year);
    let service = ServiceFactory.createActivitiesService();
    service.listActivities(year).then(arrModels => {
      this.props.setActivityModels(arrModels);
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <li className="submenu-item">
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>活動報告</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          {this.years.map((year) =>
            <li key={year} className="memu-item">
              <NavLink className="menu-label" to={AliasRoutes.ActivitiesYear + "/" + year} title={year + "年の活動を見る"} onClick={() => this.handleOnClick.bind(year)}>
                <div onClick={() => this.handleOnLinkClick(year)}>
                  {year + "年"}
                </div>
              </NavLink>
            </li>
          )}
        </ul>
      </li>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    activity: {
      year: state.activity.year,
      models: state.activity.models,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivityYear: function(year) {
      dispatch(setActivityYear(year));
    },
    setActivityModels: function(year) {
      dispatch(setActivityModels(year));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityNavigation);
