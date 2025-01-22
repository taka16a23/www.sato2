import React, { Component } from "react";
import withRouter from "helpers/WithRouter";
import { ServiceFactory } from 'services';
import Spinner from "views/spinner/Spinner";


class ActivityPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      model: null,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createActivitiesService();
    service.getActivity(this.props.params.id).then(models => {
      if (models.length <= 0) {
        this.setState({
          isLoaded: true,
        });
        return;
      }
      this.setState({
        isLoaded: true,
        model: models[0],
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if(this.state.isLoaded !== true) {
      return (
        <Spinner/>
      )
    }
    if(this.state.model === null) {
      return (
        <section className="main-item">
          <h2 className="main-title">
            <span className="title">記事が存在しません</span>
          </h2>
          <div>
          </div>
        </section>
      );
    }
    return (
      <section className="main-item">
        <h2 className="main-title">
          <span className="title">{this.state.model.title}</span>
        </h2>
        <div>
          <div dangerouslySetInnerHTML={{__html: this.state.model.body}} />
        </div>
      </section>
    )
  };
}
export default withRouter(ActivityPage);
