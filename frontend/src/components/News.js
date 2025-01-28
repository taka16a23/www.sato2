import React, { Component } from "react";
import PropTypes from 'prop-types';
import NewsList from 'components/NewsList'


class NewsComponent extends Component {

  static propTypes = {
    year: PropTypes.string,
  }
  static defaultProps = {
    year: null,
  }

  render() {
    return (
      <main id="main">
        <section className="main-item">
          <h2 className="main-title">
            <span className="title">{this.props.year ? this.props.year + "年 お知らせ一覧" : "最新のお知らせ"}</span>
          </h2>
          <div className="main-body news">
            <NewsList year={this.props.year} limit={this.props.year ? 100 : 20}/>
          </div>
        </section>
      </main>
    );
  };
}

export default NewsComponent;
