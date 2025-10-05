import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "helpers/withRouter";
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import AliasRoutes from "routes/AliasRoutes";
import { ServiceFactory } from 'services';
import {
  setActivityYear,
  setActivityModels,
} from 'redux/activity/Action';
import ContentLoader from "react-content-loader";


class ActivitiesComponent extends Component {

  constructor(props) {
    super(props)
    let isLoading = true;
    if(0 < this.props.activity.models.length) {
      isLoading = false;
    }
    this.state = {
      isLoading: isLoading,
    }
  }

  componentDidMount() {
    let year = this.props.activity.year;
    if((!year | this.props.activity.models.length <= 0)) {
      year = this.props.router.params.year;
      year = (year === undefined) ? moment().year() : year
      this.props.setActivityYear(year);
      var service = ServiceFactory.createActivitiesService();
      service.listActivities(year).then(arrModels => {
        this.props.setActivityModels(arrModels);
        this.setState({
          isLoading: false,
        });
      }).catch(err => {
        alert(err);
      });
      return;
    }
  }

  getSkeltons() {
    var elements = [];
    for (var i = 0; i < 6; i++) {
      elements.push(
        <li className="tile-item">
          <ContentLoader
            speed={2}
            width="100%"
            height={430}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="20" y="22" rx="0" ry="0" width="90%" height="204"/>
            <rect x="10%" y="242" rx="0" ry="0" width="80%" height="20"/>
            <rect x="40%" y="280" rx="0" ry="0" width="20%" height="12"/>
            <rect x="10%" y="304" rx="0" ry="0" width="80%" height="20"/>
            <rect x="10%" y="332" rx="0" ry="0" width="80%" height="20"/>
            <rect x="10%" y="360" rx="0" ry="0" width="80%" height="20"/>
          </ContentLoader>
        </li>
      );
    }
    return elements;
  }

  render() {
    if(this.state.isLoading === true) {
      return (
        <main id="main">
          <section className="main-item faq-wrapper">
            <h2 className="main-title faq-title">
              <span className="title">{this.props.activity.year + '年 '} 活動報告</span>
            </h2>
            <ul className="tile-list">
              {this.getSkeltons()}
            </ul>
          </section>
        </main>
      )
    }
    return (
      <main id="main">
        <section className="main-item faq-wrapper">
          <h2 className="main-title faq-title">
            <span className="title">{this.props.activity.year + '年 '} 活動報告</span>
          </h2>
          <ul className="tile-list">
            {this.props.activity.models.length <= 0 ? <div style={{marginLeft: "auto", marginRight: "auto"}}>表示する記事がありません。</div> : this.props.activity.models.map((oModel) =>
              <li className="tile-item" key={oModel.id}>
                <NavLink to={AliasRoutes.Activity.replace(':id', oModel.id)}>
                  <img className="tile-image" src={oModel.image} alt={oModel.title}/>
                  <h4 className="tile-title">{oModel.title}</h4>
                  <div className="tile-sub">
                    <p>{moment(oModel.publish_date).format('YYYY/MM/DD')}</p>
                  </div>
                  <div className="tile-description">
                    <p className="tile-text" dangerouslySetInnerHTML={{ __html: oModel.excerpt }}>
                    </p>
                  </div>
                </NavLink>
              </li>
            )}
          </ul>
        </section>
      </main>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    activity: {
      year: state.activity.year,
      models: state.activity.models,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivityYear: function(year) {
      dispatch(setActivityYear(year));
    },
    setActivityModels: function(year) {
      dispatch(setActivityModels(year));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActivitiesComponent));
