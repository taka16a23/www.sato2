import React, { Component } from "react";

import { ServiceFactory } from 'services';


export default class TomorrowGarbageEvents extends Component {

  constructor(props) {
    super(props)
    this.events = [];
    this.state = {
      eventsLength: this.events.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createGarbageEventsService();
    // yyyy-mm-dd
    //
    let tomorrowString = (new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toISOString().slice(0,10);
    service.listEvents(tomorrowString).then(models => {
      this.events = models;
      this.setState({
        eventsLength: this.events.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if (this.events.length <= 0) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">明日のごみ収集</h3>
          <div className="daily-link">
            <a href="#">ごみ収集はありません</a>
          </div>
        </div>
      )
    }
    if (1 <= this.events.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">明日のごみ収集</h3>
          {this.events.map((oModel) =>
            <div className="daily-link">
              <img src="{oModel.url_of_image}" alt="{oModel.summary}"/>
            </div>
          )}
        </div>
      );
    }
  };
}
