import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { ServiceFactory } from 'services';
import AliasRoutes from "routes/AliasRoutes";
import {
  setBoardYear,
  setBoardModels,
} from "redux/board/Action";


class BoardNavigation extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      isActive: false,
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createBoardsService();
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
    this.props.setBoardYear(year);
    let service = ServiceFactory.createBoardsService();
    service.listBoards(year).then(arrModels => {
      this.props.setBoardModels(arrModels);
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <li className="submenu-item">
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>回覧板</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          {this.years.map((year) =>
            <li key={year} className="memu-item">
              <NavLink className="menu-label" to={AliasRoutes.Board + "/year/" + year} title={year + "年の回覧板を見る"}>
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
    boards: {
      year: state.board.year,
      models: state.board.models,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoardYear: function(year) {
      dispatch(setBoardYear(year));
    },
    setBoardModels: function(year) {
      dispatch(setBoardModels(year));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardNavigation);
