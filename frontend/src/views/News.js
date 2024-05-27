import React, { Component } from "react";
import NewsList from 'components/NewsList'
import { NavLink } from 'react-router-dom'
import queryString from 'query-string';
import { withRouter } from "helpers/withRouter";

import AliasRoutes from "routes/AliasRoutes";


class NewsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      year: null,
    }
  }

  componentDidMount() {
    let query = queryString.parse(this.props.router.location.search);
    let year = query['year'];
    let intYear = parseInt(year);

    if (isNaN(intYear) !== true) {
      this.setState({
        year: new String(intYear),
      });
    }
  }

  render() {
    return (
      <main id="main">
        <section className="main-item">
          <h2 className="main-title">
            <NavLink className="link" to={AliasRoutes.News} alt="" title="最新情報一覧">
              <span className="title">{this.state.year ? this.state.year + "年 お知らせ一覧" : "最新情報"}</span>
            </NavLink>
          </h2>
          <div className="main-body news">
            <NewsList/>
          </div>
        </section>
      </main>
    );
  };
}

export default withRouter(NewsComponent);
