import React, { Component } from "react";
import { ServiceFactory } from 'services';


class Rules extends Component {

  constructor(props) {
    super(props);
    this.models = [];
    this.state = {
      modelLength: this.models.length,
    }
  }

  componentDidMount() {
    var oParams = new URLSearchParams();
    var service = ServiceFactory.createRulesService();
    service.listRules(oParams).then(arrModels => {
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
        {this.models.map((oModel) =>
          <div className="main-item" key={oModel.id}>
            <h2 className="main-title">
              <span className="title">{oModel.title}</span>
            </h2>
            <div className="main-content rule-content">
              {oModel.listImages().map((oImageModel) =>
                <div className="rule-image" key={oImageModel.id}>
                  <a href={oModel.document} target="_blank" title="PDFをダウンロード">
                    <img src={process.env.REACT_APP_API_URL + oImageModel.image}/>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    );
  };
}

export default Rules;
