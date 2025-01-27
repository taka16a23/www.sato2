import React, { Component } from "react";

import { ServiceFactory } from 'services';


export default class TodayGarbageEvents extends Component {

  constructor(props) {
    super(props)
    this.todayEvents = [];
    this.state = {
      todayEventsLength: this.todayEvents.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createGarbageEventsService();
    // yyyy-mm-dd
    let todayString = (new Date()).toISOString().slice(0,10);
    service.listEvents(todayString).then(models => {
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
          <h3 className="daily-label">今日のごみ収集</h3>
          <div className="daily-link">
            <a href="#">ごみ収集はありません</a>
          </div>
        </div>
      )
    }
    if (1 <= this.todayEvents.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">今日のごみ収集</h3>
          {this.todayEvents.map((oModel) =>
            <div className="daily-link">
              <img src={oModel.url_of_image} alt={oModel.summary}/>
            </div>
          )}
        </div>
      );
    }
  };
}
