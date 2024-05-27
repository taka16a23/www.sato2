import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import queryString from 'query-string';
import { withRouter } from "helpers/withRouter";
import moment from 'moment'

import { ServiceFactory } from 'services';


class NewsList extends Component {
  static propTypes = {
    limit: PropTypes.number,
  }
  static defaultProps = {
    limit: null,
  }

  constructor(props) {
    super(props)
    this.models = [];
    this.state = {
      modelLength: this.models.length,
    }
  }

  componentDidMount() {
    var oParams = new URLSearchParams();
    // 最新記事(公開日時昇順)
    oParams.append('ordering', '-publish_date');
    let query = queryString.parse(this.props.router.location.search);
    let year = query['year'];
    if (year) {
      oParams.append('year', year);
    }
    // 指定件数があれば
    if(this.props.limit !== null) {
      oParams.append('limit', this.props.limit);
    }
    var newsService = ServiceFactory.createNewsService();
    newsService.listNews(oParams).then(arrModels => {
      this.models = arrModels;
      this.setState({
        modelLength: this.models.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <ul className="news-list">
        {this.models.map((oNewsModel) =>
          <li className="news-item" key={oNewsModel.id}>
            <NavLink className="news-link" to={oNewsModel.url}>
              <span className="news-cell news-date">{moment(oNewsModel.publish_date).format('YYYY/MM/DD')}</span>
              <p className="news-cell news-category">
                <span className="news-category-label news-category-board" style={{color: oNewsModel.news_category_display.fgcolor, backgroundColor: oNewsModel.news_category_display.bgcolor}}>{oNewsModel.news_category_display.name}</span>
              </p>
              <span className="news-cell news-title">{oNewsModel.title}</span>
            </NavLink>
          </li>
        )}
      </ul>
    );
  };
}

export default withRouter(NewsList);
