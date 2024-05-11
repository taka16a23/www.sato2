import React, { Component } from "react";
import AliasRoutes from "routes/AliasRoutes";
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
      <div id="content">
        <div class="content-inner">
          <div class="container">
            <div class="side-area">
              <div class="side-item a23-btn security-portal">
                <a class="a23-btn-label" href="/security_portal.html" title="避難の判断に有用な情報です">防災統合情報</a>
              </div>
              <div class="side-item submenu">
                <ul class="submenu-list">
                  <li class="submenu-item">
                    <h2 class="submenu-label">過去のおしらせ</h2>
                    <ul class="menu-list hide">
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2004" title="2004年のおしらせを見る">2004年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2005" title="2005年のおしらせを見る">2005年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2007" title="2007年のおしらせを見る">2007年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2008" title="2008年のおしらせを見る">2008年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2010" title="2010年のおしらせを見る">2010年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2012" title="2012年のおしらせを見る">2012年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2013" title="2013年のおしらせを見る">2013年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2014" title="2014年のおしらせを見る">2014年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2015" title="2015年のおしらせを見る">2015年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2016" title="2016年のおしらせを見る">2016年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2017" title="2017年のおしらせを見る">2017年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2018" title="2018年のおしらせを見る">2018年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/news/?year=2023" title="2023年のおしらせを見る">2023年</a>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item">
                    <h2 class="submenu-label ">活動報告</h2>
                    <ul class="menu-list hide">
                      <li class="memu-item">
                        <a class="menu-label" href="/activity/?year=2016" title="2016年の活動を見る">2016年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/activity/?year=2017" title="2017年の活動を見る">2017年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/activity/?year=2023" title="2023年の活動を見る">2023年</a>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item">
                    <h2 class="submenu-label ">防犯・防災</h2>
                    <ul class="menu-list hide">
                      <li class="memu-item">
                        <a class="menu-label" href="/security/secportal/" title="防災ポータルサイトを見る">防災統合情報</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/security/secportal/#evacuationMapArea" title="避難地図を見る">避難地図</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/security/knowledge/" title="防災予備知識を見る">防災予備知識</a>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item">
                    <h2 class="submenu-label ">回覧板</h2>
                    <ul class="menu-list hide">
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2004" title="2004年の回覧を表示する">2004年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2005" title="2005年の回覧を表示する">2005年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2007" title="2007年の回覧を表示する">2007年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2008" title="2008年の回覧を表示する">2008年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2010" title="2010年の回覧を表示する">2010年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2012" title="2012年の回覧を表示する">2012年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2013" title="2013年の回覧を表示する">2013年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2014" title="2014年の回覧を表示する">2014年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2015" title="2015年の回覧を表示する">2015年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2016" title="2016年の回覧を表示する">2016年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2017" title="2017年の回覧を表示する">2017年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2018" title="2018年の回覧を表示する">2018年</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/board/?year=2023" title="2023年の回覧を表示する">2023年</a>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item">
                    <h2 class="submenu-label">自治会案内</h2>
                    <ul class="menu-list hide">
                      <li class="memu-item">
                        <a class="menu-label" href="/about/rule/" title="会則を見る">会則</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/about/hall/" title="里公民館のページを見る">公民館(予定・申込み)</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/about/group/" title="ブロックと組の地図を見る">ブロックと組</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/about/solve/#faq" title="QAを見る">よくある質問</a>
                      </li>
                      <li class="memu-item">
                        <a class="menu-label" href="/about/solve/#contact" title="情報提供・問い合わせをする">情報提供・お問い合わせ</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="main-area">
              <main id="main">
                <section class="main-item faq-wrapper">
                  <h2 class="main-title faq-title">
                    <span class="title">防災予備知識</span>
                  </h2>
                  <ul class="tile-list">
                    {this.models.map((oNewsModel) =>
                      <li class="tile-item" key={oNewsModel.id}>
                        <a href={oNewsModel.url}>
                          <img class="tile-image" src={oNewsModel.thumbnail} alt={oNewsModel.title}/>
                          <h4 class="tile-title">{oNewsModel.title}</h4>
                          <div class="tile-description">
                            <p class="tile-text" dangerouslySetInnerHTML={{ __html: oNewsModel.description }}>
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
        </div>
      </div>
    );
  };
}

export default SecurityKnowledgeComponent;
