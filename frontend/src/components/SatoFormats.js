import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ServiceFactory } from 'services';
import downlaodImg from 'assets/images/formats_download.svg';
import formImg from 'assets/images/formats_form.svg';


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
    service.listSatoFormats().then(arrModels => {
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
      <section className="main-item jichikai-formats">
        <h2 className="main-title">
          <span className="title">里自治会関係書式</span>
        </h2>
        <table>
          <thead>
            <th className="format-name">
              書式名
            </th>
            <th className="format-description">
              概要
            </th>
            <th className="format-forms" colspan="2">
              申込み方法
            </th>
          </thead>
          <tbody>
            {this.models.map((oModel) =>
              <tr key={oModel.id}>
                <td className="format-name">
                  <div>
                    {oModel.title}
                  </div>
                </td>
                <td className="format-description">
                  <div dangerouslySetInnerHTML={{ __html: oModel.description }}>
                  </div>
                </td>
                <td className="format-download">
                  {oModel.file === null ? undefined :
                   <a href={oModel.file} target="_blank">
                     <div>
                       <img src={downlaodImg} width="24" height="32"/>
                     </div>
                     <div>
                       ダウンロード
                     </div>
                   </a>
                  }
                </td>
                <td className="format-form">
                  {oModel.form === null ? undefined :
                   <a href={oModel.form} target="_blank">
                     <div>
                       <img src={formImg} width="24" height="32"/>
                     </div>
                     <div>
                       Web申請
                     </div>
                   </a>
                  }
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
