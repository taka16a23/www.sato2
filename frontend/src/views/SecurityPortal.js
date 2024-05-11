import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import AliasRoutes from "routes/AliasRoutes";
import { Timeline } from 'react-twitter-widgets'
import { ServiceFactory } from 'services';
import WeatherAlert from 'components/WeatherAlert'

import axios from "axios";
import moment from "moment";


class SecurityPortalComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serverDateTime: null,
    }
  }

  componentDidMount() {
    // サーバー時刻を利用
    let serverURL = process.env.REACT_APP_URL + AliasRoutes.Favicon;
    axios.head(serverURL).then(res => {
      let serverDateTime = new Date(res.headers.date);
      // リンク切れ対策
      // 30秒
      let fixSeconds = 30000;
      serverDateTime = new Date(serverDateTime - fixSeconds);
      // 5分で丸め
      let minutes = serverDateTime.getMinutes();
      minutes = Math.floor(minutes / 5) * 5;
      let fixDateTime = new Date(serverDateTime.getFullYear(),
                                 serverDateTime.getMonth(), serverDateTime.getDate(),
                                 serverDateTime.getHours(), minutes);
      let riverDateTime = moment(fixDateTime);
      this.setState({
        riverDateTime: riverDateTime,
      });
    });
  }

  render() {
    return (
      <div id="content">
        <div className="content-inner">
          <div className="container">
            <div className="main-area">
              <main id="main">
                <div className="main-item">
                  <h2 className="main-title">
                    <span className="title">避難情報</span>
                  </h2>
                  <div className="main-body">
                    <div className="emergency-list">
                      <div className="emergency-item emergencyInfoWrapper">
                        <div className="emergencyInfoBox">
                          <a href="https://dis-shiga.jp/pc/topdis-shiga.html" target="_blank">
                            <img className="title_pic" src="https://dis-shiga.jp/image/title.jpg"/>
                          </a>
                          <div className="emergencyInfoBoxHead">
                            <img className="icon" src="https://dis-shiga.jp/image/exclamation2.png"/>
                            <span className="title">緊急情報</span>
                          </div>
                          <div>
                            <h2>
                              <span className="name">本部体制設置</span>
                              <span className="state hasAnnounced">発表あり</span>
                              <button onClick="window.location='/pc/hq/info.html';" control-id="ControlID-11">&gt;　詳細</button>
                            </h2>
                          </div>
                          <div>
                            <h2>
                              <span className="name">避難情報
                                <a href="/other/避難情報.pdf" target="_blank">（避難情報とは）</a>
                              </span>
                              <span className="state noAnnouncement">発令なし</span>
                              <button onClick="window.location='/pc/evacuation/info.html';" control-id="ControlID-12">&gt;　詳細</button>
                            </h2>
                          </div>
                          <div>
                            <h2>
                              <span className="name">避難所情報</span>
                              <span className="state noAnnouncement">発表なし</span>
                              <button onClick="window.location='/pc/shelter/info.html';" control-id="ControlID-13">&gt;　詳細</button>
                            </h2>
                          </div>
                          <div>
                            <h2>
                              <span className="name">国民保護情報</span>
                              <span className="state noAnnouncement">発表なし</span>
                              <button onClick="window.location='/pc/civil_protection/info.html';" control-id="ControlID-14">&gt;　詳細</button>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="emergency-item security-timeline">
                        <Timeline
                          dataSource={{
                            sourceType: 'profile',
                            screenName: 'otsu_kikibousai'
                          }}
                          options={{
                            lang: "ja",
                            height: '400'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-item">
                  <h2 className="main-title">
                    <a className="link" href="http://shiga-bousai.jp/announce/weather.php" alt="" target="_blank" title="気象特別警報・警報・注意報">
                      <span className="title">気象特別警報・警報・注意報</span>
                      <i className="mdi mdi-open-in-new"></i>
                    </a>
                  </h2>
                  <WeatherAlert/>
                </div>
                <div className="main-item">
                  <h2 className="main-title">
                    <a className="link" href="http://c.shiga-bousai.jp/shigapref/pc/camDetail_6191FF05.html" alt="" target="_blank" title="大戸川(石居橋)の様子">
                      <span className="title">大戸川(石居橋)の様子</span>
                      <i className="mdi mdi-open-in-new"></i>
                    </a>
                  </h2>
                  <h3>
                    <a href="http://c.shiga-bousai.jp/shigapref/pc/camDetail_6191FF05.html" target="_blank" title="滋賀県河川防災カメラのページへ移動">滋賀県 河川防災カメラ {this.state.riverDateTime === undefined ? "" : this.state.riverDateTime.format('YYYY年M月D日 HH:mm')} 現在</a>
                  </h3>
                  <div className="rivercam-container">
                    <div id="riverCam" className="riverAlertEntry">
                      <a href="http://c.shiga-bousai.jp/shigapref/pc/camDetail_6191FF05.html" target="_blank" title="滋賀県河川防災カメラ">
                        <img src={this.state.riverDateTime === undefined ? "" : "http://c.shiga-bousai.jp/shigapref/pc/cameraData/images/6191FF05/" + this.state.riverDateTime.format('YYYYMMDDHHmm') + ".jpg"} alt="石居橋の現在の様子"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-item">
                  <div id="evacuationMapArea" className="evacuationInfoEntry clearfix">
                    <iframe src="https://www.google.com/maps/d/embed?mid=zJXaXK9GQ-AU.kwVpZ6T_kTts"></iframe>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default SecurityPortalComponent;
