import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import SideNavigations from 'components/SideNavigations';


class GroupComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <SideNavigations/>
        <div className="main-area">
          <main id="main">
            <section className="main-item">
              <h2 className="main-title">
                <span className="title">ブロックと組割の地図</span>
              </h2>
              <iframe src="https://www.google.com/maps/d/u/1/embed?mid=zJXaXK9GQ-AU.kCiGt_OQoawU" height="520" style={{width: "100%"}}></iframe>
            </section>
          </main>
        </div>
      </div>
    );
  };
}

export default GroupComponent;
