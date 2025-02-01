import React, { Component } from "react";

import TomorrowGarbageEvents from 'components/TomorrowGarbageEvents';
import TomorrowMainEvents from 'components/TomorrowMainEvents';


export default class TomorrowEvents extends Component {

  render() {
    return (
      <>
        <TomorrowGarbageEvents/>
        <TomorrowMainEvents/>
      </>
    )
  };
}
