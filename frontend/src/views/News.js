import React, { Component } from "react";
import NewsList from 'components/NewsList'
import { NavLink } from 'react-router-dom'

import AliasRoutes from "routes/AliasRoutes";


class NewsComponent extends Component {

  render() {
    return (
      <main id="main">
        <section className="main-item">
          <h2 className="main-title">
            <NavLink className="link" to={AliasRoutes.News} alt="" title="最新情報一覧">
              <span className="title">最新情報</span>
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

export default NewsComponent;
