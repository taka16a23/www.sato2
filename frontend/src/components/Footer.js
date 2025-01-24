import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { ServiceFactory } from 'services';
import AliasRoutes from "routes/AliasRoutes";
import {
  setActivityYear,
  setActivityModels,
} from 'redux/activity/Action';
import {
  setBoardYear,
  setBoardModels,
} from "redux/board/Action";


class Footer extends Component {

  constructor(props) {
    super(props)
    this.newsYears = [];
    this.activityYears = [];
    this.boardYears = [];
    this.state = {
      newsYearsLength: this.newsYears.length,
      activityYearsLength: this.activityYears.length,
      boardYearsLength: this.boardYears.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createNewsService();
    service.listYears().then(years => {
      this.newsYears = years;
      this.setState({
        newsYearsLength: this.newsYears.length,
      });
    }).catch(err => {
      alert(err);
    });
    var service = ServiceFactory.createActivitiesService();
    service.listYears().then(years => {
      this.activityYears = years;
      this.setState({
        activityYearsLength: this.activityYears.length,
      });
    }).catch(err => {
      alert(err);
    });
    var service = ServiceFactory.createBoardsService();
    service.listYears().then(years => {
      this.boardYears = years;
      this.setState({
        boardYearsLength: this.boardYears.length,
      });
    }).catch(err => {
      alert(err);
    });

  }

  handleNewsOnClick(year) {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  handleActivityOnClick(year) {
    this.props.setActivityYear(year);
    let service = ServiceFactory.createActivitiesService();
    service.listActivities(year).then(arrModels => {
      this.props.setActivityModels(arrModels);
    }).catch(err => {
      alert(err);
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  handleBoardOnClick(year) {
    this.props.setBoardYear(year);
    let service = ServiceFactory.createBoardsService();
    service.listBoards(year).then(arrModels => {
      this.props.setBoardModels(arrModels);
    }).catch(err => {
      alert(err);
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  handleOnClick(ev) {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


  render() {
    return (
      <>
        <footer id="footer">
          <div className="footer-inner">
            <div className="footer-container">
              <div className="sitemap-area">
                <div className="sitemap sitemap-news">
                  <h3 className="sitemap-title">
                    <NavLink to={AliasRoutes.News}>おしらせ</NavLink>
                  </h3>
                  <ul className="sitemap-list">
                    {this.newsYears.map((year) =>
                      <li key={year} className="sitemap-item">
                        <NavLink to={AliasRoutes.NewsYear + "/" + year} title={year + "年のお知らせを見る"} onClick={() => this.handleNewsOnClick(year)}>
                          <i className="mdi mdi-menu-right"></i>
                          {year + '年'}
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="sitemap sitemap-activity">
                  <h3 className="sitemap-title">
                    <NavLink to={AliasRoutes.Activities}>ご報告</NavLink>
                  </h3>
                  <ul className="sitemap-list">
                    {this.activityYears.map((year) =>
                      <li key={year} className="sitemap-item">
                        <NavLink to={AliasRoutes.ActivitiesYear + "/" + year} title={year + "年の活動を見る"} onClick={() => this.handleActivityOnClick(year)}>
                          <i className="mdi mdi-menu-right"></i>
                          {year + '年'}
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="sitemap sitemap-board">
                  <h3 className="sitemap-title">
                    <NavLink to={AliasRoutes.Board}>回覧板</NavLink>
                  </h3>
                  <ul className="sitemap-list">
                    {this.activityYears.map((year) =>
                      <li key={year} className="sitemap-item">
                        <NavLink to={AliasRoutes.BoardsYear + "/" + year} title={year + "年の回覧を見る"} onClick={() => this.handleBoardOnClick(year)}>
                          <i className="mdi mdi-menu-right"></i>
                          {year + '年'}
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="sitemap sitemap-security">
                  <h3 className="sitemap-title">
                    <NavLink to={AliasRoutes.Security} onClick={() => this.handleOnClick()}>防犯・防災</NavLink>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.SecurityPortal} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        統合情報
                      </NavLink>
                    </li>
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.SecurityKnowledge} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        防災予備知識
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="sitemap sitemap-formats">
                  <h3 className="sitemap-title">
                    <NavLink to={AliasRoutes.Format} onClick={() => this.handleOnClick()}>各種申請</NavLink>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.Formats + "/#sato"} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        里自治会関係書式
                      </NavLink>
                    </li>
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.Formats + "/#other"} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        自治体等関係書式
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="sitemap sitemap-about">
                  <h3 className="sitemap-title">
                    <NavLink to={AliasRoutes.About} onClick={() => this.handleOnClick()}>自治会案内</NavLink>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.AboutRule} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        会則
                      </NavLink>
                    </li>
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.AboutHall} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>公民館
                      </NavLink>
                    </li>
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.AboutGroup} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        ブロックと組
                      </NavLink>
                    </li>
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.AboutQuery} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        よくある質問
                      </NavLink>
                    </li>
                    <li className="sitemap-item">
                      <NavLink to={AliasRoutes.AboutQuery} onClick={() => this.handleOnClick()}>
                        <i className="mdi mdi-menu-right"></i>
                        情報提供・お問い合わせ
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="aboutme-area">
                <h1 className="aboutme-title">
                  <NavLink to={AliasRoutes.Top} title="里自治会">
                    里自治会
                  </NavLink>
                </h1>
                <div className="aboutme-body">
                  <div className="aboutme-item yuubin-before">520-2276</div>
                  <div className="aboutme-item"><i className="mdi mdi-map-marker"></i><a href="https://www.google.co.jp/maps/place/%E3%80%92520-2276+Shiga-ken,+%C5%8Ctsu-shi,+Sato,+5+Chome%E2%88%927%E2%88%9222+%E9%87%8C%E5%85%AC%E6%B0%91%E9%A4%A8/@34.9394985,135.9306612,17z/data=!4m2!3m1!1s0x60016cee67f7d6df:0xe8e861cb3f9f2737?hl=ja" target="_blank" title="地図を見る">滋賀県大津市里5丁目7-22</a></div>
                  <div className="aboutme-item phone-before">&nbsp;077-546-6905</div>
                  <div className="aboutme-item fax-before">&nbsp;077-546-6905</div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <small>Copyright&copy; 2016 <a href="https://taka16a23.com" ref="noreferrer" target="_blank">taka16a23</a> All Rights Reserved.</small>
            </div>
          </div>
        </footer>
        <div id="menubar_hdr">
        </div>
        <div id="pagetop">
          <a href="#" alt="先頭へ移動" title="先頭へ移動"><i className="mdi mdi-arrow-up-bold"></i></a>
        </div>
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    activity: {
      year: state.activity.year,
      models: state.activity.models,
    },
    boards: {
      year: state.board.year,
      models: state.board.models,
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
    setBoardYear: function(year) {
      dispatch(setBoardYear(year));
    },
    setBoardModels: function(year) {
      dispatch(setBoardModels(year));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
