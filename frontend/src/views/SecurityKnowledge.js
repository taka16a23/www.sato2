import React, { Component } from "react";
import AliasRoutes from "routes/AliasRoutes";
import { ServiceFactory } from 'services';
import SideNavigations from 'components/SideNavigations';


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
      <div class="container">
        <SideNavigations/>
        <div class="main-area">
          <main id="main">
            <section class="main-item faq-wrapper">
              <h2 class="main-title faq-title">
                <span class="title">防災予備知識</span>
              </h2>
              <ul class="tile-list">
                {this.models.map((oModel) =>
                  <li class="tile-item" key={oModel.id}>
                    <a href={oModel.url}>
                      <img class="tile-image" src={oModel.thumbnail} alt={oModel.title}/>
                      <h4 class="tile-title">{oModel.title}</h4>
                      <div class="tile-description">
                        <p class="tile-text" dangerouslySetInnerHTML={{ __html: oModel.description }}>
                        </p>
                      </div>
                    </a>
                  </li>
                )}
              </ul>
            </section>
          </main>
        </div>
      </div>
    );
  };
}

export default SecurityKnowledgeComponent;
