import React, { Component } from "react";

import { ServiceFactory } from 'services';
import TodayHallEvents from 'components/TodayHallEvents';
import TodayMainEvents from 'components/TodayMainEvents';
import TodayGarbageEvents from 'components/TodayGarbageEvents';


export default class TodayEvents extends Component {

  render() {
    return (
      <>
        <TodayGarbageEvents/>
        <TodayMainEvents/>
        <TodayHallEvents/>
      </>
    )
  };
}
