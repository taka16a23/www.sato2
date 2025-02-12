import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

import { ServiceFactory } from 'services';
import ContentLoader from "react-content-loader"


class NewsList extends Component {
  static propTypes = {
    limit: PropTypes.number,
    year: PropTypes.string,
  }
  static defaultProps = {
    limit: 5,
    year: null,
  }

  constructor(props) {
    super(props)
    this.models = [];
    this.state = {
      modelLength: this.models.length,
      isLoading: true,
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    var oParams = new URLSearchParams();
    // 最新記事(公開日時昇順)
    oParams.append('ordering', '-publish_date');
    if (nextProps.year) {
      oParams.append('year', nextProps.year);
    }
    // 指定件数があれば
    if(nextProps.limit !== null) {
      oParams.append('limit', nextProps.limit);
    }
    var newsService = ServiceFactory.createNewsService();
    newsService.listNews(oParams).then(arrModels => {
      this.models = arrModels;
      this.setState({
        modelLength: this.models.length,
        isLoading: false,
      });
    }).catch(err => {
      alert(err);
    });
  }

  getRects() {
    var elements = [];
    elements.push(<rect x="0" y="0" rx="0" ry="0" height="54" style={{ width: '100%' }}/>);
    for (var i = 0; i < this.props.limit; i++) {
      elements.push(<rect x="0" y={i * 56} rx="0" ry="0" height="54" style={{ width: '100%' }}/>);
    }
    return elements;
  }

  render() {
    console.log(this.props.limit);
    if(this.state.isLoading === true) {
      return (
        <ContentLoader
          speed={2}
          height={56 * this.props.limit}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{ width: '100%' }}
        >
          {this.getRects()}
        </ContentLoader>
      )
    }
    return (
      <ul className="news-list">
        {this.models.map((oNewsModel) =>
          <li className="news-item" key={oNewsModel.id}>
            <NavLink className="news-link" to={oNewsModel.url} target={oNewsModel.news_category_display.name === "回覧" ? "_blank" : ""}>
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

export default NewsList;
