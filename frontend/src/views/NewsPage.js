import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { ServiceFactory } from 'services';
import News from 'components/News';


class NewsPageComponent extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    var newsService = ServiceFactory.createNewsService();
    newsService.listYears().then(years => {
      this.years = years;
      this.setState({
        yearsLength: this.years.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <Routes>
        {this.years.map((year) =>
          <Route exact={false} path={'/year/' + year} element={<News year={year.toString()}/>} key={year}/>
        )}
        <Route path='*' element={<News/>}/>
      </Routes>
    );
  };
}

export default NewsPageComponent;
