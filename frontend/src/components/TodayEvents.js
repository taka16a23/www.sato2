import React, { Component } from "react";

import { ServiceFactory } from 'services';
import TodayHallEvents from 'components/TodayHallEvents';
import TodayMainEvents from 'components/TodayMainEvents';


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
        <TodayMainEvents/>
        <TodayHallEvents/>
      </>
    )
  };
}
