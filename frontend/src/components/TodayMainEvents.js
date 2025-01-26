import React, { Component } from "react";

import { ServiceFactory } from 'services';
import moment from 'moment'


export default class TodayMainEvents extends Component {

  constructor(props) {
    super(props)
    this.todayEvents = [];
    this.state = {
      todayEventsLength: this.todayEvents.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createMainEventsService();
    // yyyy-mm-dd
    let todayString = (new Date()).toISOString().slice(0,10);
    let startTodayString = todayString + ' 00:00:00';
    let endTodayString = todayString + ' 23:59:59';
    service.listEvents(startTodayString, endTodayString).then(models => {
      this.todayEvents = models;
      this.setState({
        todayEventsLength: this.todayEvents.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if (this.todayEvents.length <= 0) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">今日の予定</h3>
          <div className="daily-link">
            <a href="#">予定はありません</a>
          </div>
        </div>
      )
    }
    if (1 <= this.todayEvents.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">今日の予定</h3>
          {this.todayEvents.map((oModel) =>
            <div className="daily-link" key={oModel.gid}>
              <a href="{oModel.url}">moment(oModel.start).format('HH:mm') + " " + oModel.summary</a>
            </div>
          )}
        </div>
      );
    }
  };
}
