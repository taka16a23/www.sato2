import React, { Component } from "react";
import AliasRoutes from "routes/AliasRoutes";
import { ServiceFactory } from 'services';
import downlaodImg from 'assets/images/formats_download.svg';
import formImg from 'assets/images/formats_form.svg';


class FormatsComponent extends Component {

  constructor(props) {
    super(props);
    this.satoFormatsModels = [];
    this.otherFormatsModels = [];
    this.state = {
      satoFormatsModelLength: this.satoFormatsModels.length,
      otherFormatsModelLength: this.otherFormatsModels.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createFormatsService();
    service.listSatoFormats().then(arrModels => {
      this.satoFormatsModels = arrModels;
      this.setState({
        satoFormatsModelLength: this.satoFormatsModels.length,
      });
    }).catch(err => {
      alert(err);
    });
    service.listOtherFormats().then(arrModels => {
      this.otherFormatsModels = arrModels;
      this.setState({
        otherFormatsModelLength: this.otherFormatsModels.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <div id="content">
        <div className="content-inner">
          <div className="container">
            <div className="side-area">
              <div className="side-item a23-btn security-portal">
                <a className="a23-btn-label" href="/security_portal.html" title="避難の判断に有用な情報です">防災統合情報</a>
              </div>
              <div className="side-item submenu">
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <h2 className="submenu-label">過去のおしらせ</h2>
                    <ul className="menu-list hide">
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2004" title="2004年のおしらせを見る">2004年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2005" title="2005年のおしらせを見る">2005年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2007" title="2007年のおしらせを見る">2007年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2008" title="2008年のおしらせを見る">2008年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2010" title="2010年のおしらせを見る">2010年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2012" title="2012年のおしらせを見る">2012年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2013" title="2013年のおしらせを見る">2013年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2014" title="2014年のおしらせを見る">2014年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2015" title="2015年のおしらせを見る">2015年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2016" title="2016年のおしらせを見る">2016年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2017" title="2017年のおしらせを見る">2017年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2018" title="2018年のおしらせを見る">2018年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/news/?year=2023" title="2023年のおしらせを見る">2023年</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-item">
                    <h2 className="submenu-label ">活動報告</h2>
                    <ul className="menu-list hide">
                      <li className="memu-item">
                        <a className="menu-label" href="/activity/?year=2016" title="2016年の活動を見る">2016年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/activity/?year=2017" title="2017年の活動を見る">2017年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/activity/?year=2023" title="2023年の活動を見る">2023年</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-item">
                    <h2 className="submenu-label ">防犯・防災</h2>
                    <ul className="menu-list hide">
                      <li className="memu-item">
                        <a className="menu-label" href="/security/secportal/" title="防災ポータルサイトを見る">防災統合情報</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/security/secportal/#evacuationMapArea" title="避難地図を見る">避難地図</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/security/knowledge/" title="防災予備知識を見る">防災予備知識</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-item">
                    <h2 className="submenu-label ">回覧板</h2>
                    <ul className="menu-list hide">
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2004" title="2004年の回覧を表示する">2004年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2005" title="2005年の回覧を表示する">2005年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2007" title="2007年の回覧を表示する">2007年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2008" title="2008年の回覧を表示する">2008年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2010" title="2010年の回覧を表示する">2010年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2012" title="2012年の回覧を表示する">2012年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2013" title="2013年の回覧を表示する">2013年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2014" title="2014年の回覧を表示する">2014年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2015" title="2015年の回覧を表示する">2015年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2016" title="2016年の回覧を表示する">2016年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2017" title="2017年の回覧を表示する">2017年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2018" title="2018年の回覧を表示する">2018年</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/board/?year=2023" title="2023年の回覧を表示する">2023年</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-item">
                    <h2 className="submenu-label">自治会案内</h2>
                    <ul className="menu-list hide">
                      <li className="memu-item">
                        <a className="menu-label" href="/about/rule/" title="会則を見る">会則</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/about/hall/" title="里公民館のページを見る">公民館(予定・申込み)</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/about/group/" title="ブロックと組の地図を見る">ブロックと組</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/about/solve/#faq" title="QAを見る">よくある質問</a>
                      </li>
                      <li className="memu-item">
                        <a className="menu-label" href="/about/solve/#contact" title="情報提供・問い合わせをする">情報提供・お問い合わせ</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-area">
              <main id="main">
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
                      {this.satoFormatsModels.map((oModel) =>
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
                      {this.otherFormatsModels.map((oModel) =>
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
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default FormatsComponent;
