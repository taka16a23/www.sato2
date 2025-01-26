import React, { Component } from "react";

import { ServiceFactory } from 'services';
import TodayHallEvents from 'components/TodayHallEvents';


export default class TodayEvents extends Component {

  render() {
    return (
      <>
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
        <TodayHallEvents/>
      </>
    )
  };
}
