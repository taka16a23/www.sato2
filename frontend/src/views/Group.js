import React, { Component } from "react";


class GroupComponent extends Component {

  render() {
    return (
      <main id="main">
        <section className="main-item">
          <h2 className="main-title">
            <span className="title">ブロックと組割の地図</span>
          </h2>
          <iframe src="https://www.google.com/maps/d/u/1/embed?mid=zJXaXK9GQ-AU.kCiGt_OQoawU" height="520" style={{width: "100%"}}></iframe>
        </section>
      </main>
    );
  };
}

export default GroupComponent;
