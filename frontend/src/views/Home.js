import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import NewsList from 'components/NewsList'
import SideNavigations from 'components/SideNavigations';

import { ServiceFactory } from 'services';
import AliasRoutes from "routes/AliasRoutes";


class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.years = [];
    this.state = {
      yearsLength: this.years.length,
      today: new Date(),
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

  render() {
    return (
      <div className="container">
        <SideNavigations/>
        <div className="main-area">
          <main id="main" className="home">
            <section className="main-item">
              <h2 className="main-title">
                <NavLink className="link" to={AliasRoutes.News} alt="" title="最新情報一覧">
                  <span className="title">最新情報</span>
                </NavLink>
              </h2>
              <div className="main-body news">
                <NewsList limit={Number(process.env.REACT_APP_NEWS_LIMIT)}/>
              </div>
            </section>
            <section className="main-item">
              <h2 className="main-title">
                <a className="link" href="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=satotanakami%40gmail.com&amp;color=%23125A12&amp;ctz=Asia%2FTokyo" alt="" title="カレンダー" target="_blank" rel="noreferrer">
                  <span className="title">当面の予定</span>
                  <i className="mdi mdi-open-in-new"></i>
                </a>
              </h2>
              <div className="main-body calendar">
                <iframe className="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=satotanakami%40gmail.com&amp;color=%23125A12&amp;ctz=Asia%2FTokyo" style={{borderWidth:"0", height:"60vh"}} frameBorder="0" scrolling="no" title="google calendar" loading='lazy'></iframe>
              </div>
            </section>
          </main>
        </div>
        <div className="side-area">
          <div className="side-item">
            <h2 className="side-title">
              <a className="link" href="#" alt="" title="今日">
                <span className="title">今日</span>
              </a>
            </h2>
            <div className="side-body daily-today">
              <div className="daily-calendar">
                <a href="#" alt="" title="">
                  <div className="daily-date daily-year daily-month">
                    <span>{this.state.today.getFullYear()}年{this.state.today.getMonth() + 1}月</span>
                  </div>
                  <div className="daily-date daily-date-day">
                    <span className="daily-date-num">{this.state.today.getDate()}</span><span>日</span>
                  </div>
                  <div className="daily-date daily-weekly">
                    <span>{[ "日", "月", "火", "水", "木", "金", "土" ][this.state.today.getDay()]}曜日</span>
                  </div>
                </a>
              </div>
              <div className="daily-item">
                <h3 className="daily-label">今日のごみ収集</h3>
                <div className="daily-link">
                  <a href="#">ごみ収集はありません</a>
                </div>
              </div>
              <div className="daily-item">
                <h3 className="daily-label">今日の予定</h3>
                <div className="daily-link">
                  <a href="#">予定はありません</a>
                </div>
              </div>
              <div className="daily-item">
                <h3 className="daily-label">公民館の利用</h3>
                <div className="daily-link">
                  <a href="#">利用予定はありません</a>
                </div>
              </div>
            </div>
          </div>
          <div className="side-item">
            <h2 className="side-title">
              <a className="link" href="#" alt="" title="明日">
                <span>明日</span>
              </a>
            </h2>
            <div className="side-body daily-tomorrow">
              <div className="daily-item">
                <h3 className="daily-label">明日のごみ収集</h3>
                <div className="daily-link">
                  <a href="#">ごみ収集はありません</a>
                </div>
              </div>
              <div className="daily-item">
                <h3 className="daily-label">明日の予定</h3>
                <div className="daily-link">
                  <a href="#">予定はありません</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default HomeComponent;
