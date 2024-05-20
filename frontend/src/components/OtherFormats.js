import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ServiceFactory } from 'services';


class SatoFormats extends Component {
  static propTypes = {
  }
  static defaultProps = {
  }

  constructor(props) {
    super(props)
    this.models = [];
    this.state = {
      modelLength: this.models.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createFormatsService();
    service.listOtherFormats().then(arrModels => {
      this.models = arrModels;
      this.setState({
        models: this.models.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <section className="main-item jichitai-formats">
        <h2 className="main-title">
          <span className="title">自治体等関係書式</span>
        </h2>
        <table>
          <thead>
            <th className="format-name">
              書式名
            </th>
            <th className="format-description">
              概要
            </th>
          </thead>
          <tbody>
            {this.models.map((oModel) =>
              <tr>
                <td className="format-name">
                  <a href={oModel.url} target="_blank">
                    {oModel.title}
                  </a>
                </td>
                <td className="format-description" dangerouslySetInnerHTML={{ __html: oModel.description }}>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    );
  };
}

export default SatoFormats;
