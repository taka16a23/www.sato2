import React, { Component } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


class GroupComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  onLoaded() {
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    return (
      <main id="main">
        <section className="main-item">
          <h2 className="main-title">
            <span className="title">ブロックと組割の地図</span>
          </h2>
          <Skeleton height={520} style={{marginTop: "50px", display: this.state.isLoaded !== true ? "block" : "none"}}/>
          <iframe src="https://www.google.com/maps/d/u/1/embed?mid=zJXaXK9GQ-AU.kCiGt_OQoawU" height="520" onLoad={this.onLoaded.bind(this)} style={{width: "100%", display: this.state.isLoaded !== true ? "none" : "block"}} title="calendar"></iframe>
        </section>
      </main>
    );
  };
}

export default GroupComponent;
