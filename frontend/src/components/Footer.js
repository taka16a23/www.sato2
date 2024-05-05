import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import AliasRoutes from "routes/AliasRoutes";


class Footer extends Component {

  render() {
    return (
      <>
        <footer id="footer">
          <div className="footer-inner">
            <div className="footer-container">
              <div className="sitemap-area">
                <div className="sitemap sitemap-news">
                  <h3 className="sitemap-title">
                    <a href="/news/">おしらせ</a>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                  </ul>
                </div>
                <div className="sitemap sitemap-activity">
                  <h3 className="sitemap-title">
                    <a href="/activity/">ご報告</a>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                  </ul>
                </div>
                <div className="sitemap sitemap-board">
                  <h3 className="sitemap-title">
                    <a href="/board/">回覧板</a>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                    <li className="sitemap-item"><a href="/news/?year=2000"><i className="mdi mdi-menu-right"></i>2000年</a></li>
                  </ul>
                </div>
                <div className="sitemap sitemap-security">
                  <h3 className="sitemap-title">
                    <a href="/security/">防犯・防災</a>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item"><a href="/security/secportal/"><i className="mdi mdi-menu-right"></i>統合情報</a></li>
                    <li className="sitemap-item"><a href="/security/secportal/#evacuationMapArea"><i className="mdi mdi-menu-right"></i>避難地図</a></li>
                    <li className="sitemap-item"><a href="/security/knowledge/"><i className="mdi mdi-menu-right"></i>防災予備知識</a></li>
                  </ul>
                </div>
                <div className="sitemap sitemap-formats">
                  <h3 className="sitemap-title">
                    <a href="/formats/">各種申請</a>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item"><a href="/formats/#formatSato"><i className="mdi mdi-menu-right"></i>里自治会関係書式</a></li>
                    <li className="sitemap-item"><a href="/formats/#formatETC"><i className="mdi mdi-menu-right"></i>自治体等関係書式</a></li>
                  </ul>
                </div>
                <div className="sitemap sitemap-about">
                  <h3 className="sitemap-title">
                    <a href="/about/">自治会案内</a>
                  </h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item"><a href="/about/rule/"><i className="mdi mdi-menu-right"></i>会則</a></li>
                    <li className="sitemap-item"><a href="/about/hall/"><i className="mdi mdi-menu-right"></i>公民館</a></li>
                    <li className="sitemap-item"><a href="/about/group/"><i className="mdi mdi-menu-right"></i>ブロックと組</a></li>
                    <li className="sitemap-item"><a href="/about/solve/#faq"><i className="mdi mdi-menu-right"></i>よくある質問</a></li>
                    <li className="sitemap-item"><a href="/about/solve/#contact"><i className="mdi mdi-menu-right"></i>情報提供・お問い合わせ</a></li>
                  </ul>
                </div>
                <div className="sitemap sitemap-etc">
                  <h3 className="sitemap-title">その他</h3>
                  <ul className="sitemap-list">
                    <li className="sitemap-item"><a href="/news/feed/"><i className="mdi mdi-menu-right"></i>RSS</a></li>
                  </ul>
                </div>
              </div>
              <div className="aboutme-area">
                <h1 className="aboutme-title">
                  <NavLink to={AliasRoutes.Top} title="里自治会">
                    里自治会
                  </NavLink>
                </h1>
                <div className="aboutme-body">
                  <div className="aboutme-item yuubin-before">520-2276</div>
                  <div className="aboutme-item"><i className="mdi mdi-map-marker"></i><a href="https://www.google.co.jp/maps/place/%E3%80%92520-2276+Shiga-ken,+%C5%8Ctsu-shi,+Sato,+5+Chome%E2%88%927%E2%88%9222+%E9%87%8C%E5%85%AC%E6%B0%91%E9%A4%A8/@34.9394985,135.9306612,17z/data=!4m2!3m1!1s0x60016cee67f7d6df:0xe8e861cb3f9f2737?hl=ja" target="_blank" title="地図を見る">滋賀県大津市里5丁目7-22</a></div>
                  <div className="aboutme-item phone-before">&nbsp;077-546-6905</div>
                  <div className="aboutme-item fax-before">&nbsp;077-546-6905</div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <small>Copyright&copy; a23 All Rights Reserved.</small>
            </div>
          </div>
        </footer>
        <div id="menubar_hdr">
        </div>
        <div id="pagetop">
          <a href="#" alt="先頭へ移動" title="先頭へ移動"><i className="mdi mdi-arrow-up-bold"></i></a>
        </div>
      </>
    );
  };
}

export default Footer;
