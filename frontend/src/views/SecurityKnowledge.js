import React, { Component } from "react";
import { ServiceFactory } from 'services';


class SecurityKnowledgeComponent extends Component {

  constructor(props) {
    super(props);
    this.models = [];
    this.state = {
      modelLength: this.models.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createSecurityKnowledgeService();
    service.listSecurityKnowledges().then(arrModels => {
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
      <main id="main">
        <section className="main-item faq-wrapper">
          <h2 className="main-title faq-title">
            <span className="title">防災予備知識</span>
          </h2>
          <ul className="tile-list">
            {this.models.map((oModel) =>
              <li className="tile-item" key={oModel.id}>
                <a href={oModel.url}>
                  <img className="tile-image" src={oModel.thumbnail} alt={oModel.title}/>
                  <h4 className="tile-title">{oModel.title}</h4>
                  <div className="tile-description">
                    <p className="tile-text" dangerouslySetInnerHTML={{ __html: oModel.description }}>
                    </p>
                  </div>
                </a>
              </li>
            )}
          </ul>
        </section>
      </main>
    );
  };
}

export default SecurityKnowledgeComponent;
