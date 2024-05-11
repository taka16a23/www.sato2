import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import AliasRoutes from "routes/AliasRoutes";

import header_img from 'assets/images/header.jpg';


class Header extends Component {

  render() {
    return (
      <header id="header">
        <div className="header-inner">
          <div className="container">
            <div className="container-inner">
              <div className="header-image">
                <NavLink to={AliasRoutes.Top} className="menu-label" alt="home" title="トップページへ">
                  <img src={header_img} alt="笹間山の頂上八畳岩から撮影された里自治会町内" style={{width: "100%", height: "100%"}}/>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="container-inner">
              <div className="menu-area">
                <ul className="menu-list">
                  <li className="menu-item">
                    <NavLink to={AliasRoutes.News} className="menu-label" alt="news">
                      おしらせ
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to={AliasRoutes.Info} className="menu-label" alt="info">
                      活動報告
                    </NavLink>
                  </li>
                  <li className="menu-item dropdown">
                    <NavLink to={AliasRoutes.Security} className="menu-label dropdown-label" alt="security">
                      防犯・防災<i className="mdi mdi-menu-down"></i>
                    </NavLink>
                    <ul className="dropdown-container">
                      <li className="dropdown-item">
                        <NavLink to={AliasRoutes.SecurityPortal} className="dropdown-label" alt="security">
                          防災統合情報
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to={AliasRoutes.SecurityKnowledge} className="dropdown-label" alt="knowledge">
                          防災予備知識
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <NavLink to={`/board`} className="menu-label" alt="board">
                      回覧板
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to={AliasRoutes.Formats} className="menu-label" alt="form">
                      各種申請
                    </NavLink>
                  </li>
                  <li className="menu-item dropdown">
                    <NavLink to={`/about/rule`} className="menu-label dropdown-label" alt="about">
                      自治会案内<i className="mdi mdi-menu-down"></i>
                    </NavLink>
                    <ul className="dropdown-container">
                      <li className="dropdown-item">
                        <NavLink to={`/about/rule`} className="dropdown-label" alt="rule">
                          会則
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to={`/about/book`} className="dropdown-label" alt="book">
                          公民館(予定・申込み)
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to={`/about/group`} className="dropdown-label" alt="group">
                          ブロックと組
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to={`/about/faq`} className="dropdown-label" alt="faq">
                          よくある質問
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink to={`/about/query`} className="dropdown-label" alt="query">
                          情報提供・お問い合わせ
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
}

export default Header;
