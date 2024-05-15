import React, { Component } from "react";
import AliasRoutes from "routes/AliasRoutes";
import { ServiceFactory } from 'services';


class HallComponent extends Component {

  constructor(props) {
    super(props);
    this.models = [];
    this.state = {
      modelLength: this.models.length,
    }
  }

  componentDidMount() {
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
                <section class="main-item">
                  <h2 class="main-title">
                    <span class="title">里公民館</span>
                  </h2>
                  <p>町内団体使用の場合は無料。</p>
                  <p>その他団体の貸館料金は相談の上決定する。</p>
                  <iframe src="https://calendar.google.com/calendar/embed?showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=6m5ne5kcfmkek4t0ba37o95olo%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Asia%2FTokyo" height="600" style={{width: "100%",borderWidth: 0}} frameborder="0" scrolling="no"></iframe>
                </section>
                <section class="main-item">
                  <h2 class="main-title">
                    <span class="title">里公民館使用申込</span>
                  </h2>
                  <p>7以内にこちらから連絡がない場合は、電話番号 077-546-6905 にて、ご連絡をお願いいたします。</p>
                  <form>
                    <fieldset class="form-fieldset form-fieldset-name required">
                      <legend>団体名</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">団体名</label>
                        <input id="field_3885034_sei" class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder="ブロック1 1-1組" required="" data-pattern="1"/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name required">
                      <legend>使用責任者</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">使用責任者</label>
                        <input id="field_3885034_sei" class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder="田中 美里" required="" data-pattern="1"/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name required">
                      <legend>住所</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">住所</label>
                        <input id="field_3885034_sei" class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder="里5丁目7-22" required="" data-pattern="1"/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name required">
                      <legend>電話番号</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">電話番号</label>
                        <input id="field_3885034_sei" class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder="077-XXX-XXXX" required="" data-pattern="1"/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name required">
                      <legend>メールアドレス</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">メールアドレス</label>
                        <input id="field_3885034_sei" class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder="example@example.com" required="" data-pattern="1"/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name">
                      <legend>使用目的(会合名称)</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">使用目的</label>
                        <input id="field_3885034_sei" class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder="ブロック1 1-1組の会合"/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name required">
                      <legend>使用日時</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">使用日時</label>
                        <input class="form-control form-name-sei" name="" type="datetime-local" value="" required=""/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                      から
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">終了時刻</label>
                        <input class="form-control form-name-sei" type="time" name="" required="" />
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                      まで
                    </fieldset>
                    <fieldset data-fieldset-id="3885036" class="form-fieldset form-fieldset-radiobutton required" data-fieldset-label="性別">
                      <legend>使用室名</legend>
                      <div>
                        <div class="form-group form-fieldgroup was-validated">
                          <div class="hall-list row g-2">
                            <input name="" type="hidden" class="" value=""/>
                            <div class="hall-select col-md-6 d-flex">
                              <label for="field_3885036_0" class="form-label-radio-checkbox form-check-label d-flex align-items-center valid">
                                <input id="field_3885036_0" class="form-check-input" name="field_3885036" type="radio" value="0"/>
                                大ホール
                              </label>
                            </div>
                            <div class="hall-select col-md-6 d-flex">
                              <label for="field_3885036_1" class="form-label-radio-checkbox form-check-label d-flex align-items-center valid">
                                <input id="field_3885036_1" class="form-check-input" name="field_3885036" type="radio" value="1"/>
                                2階和室
                              </label>
                            </div>
                            <div class="hall-select col-md-6 d-flex">
                              <label for="field_3885036_2" class="form-label-radio-checkbox form-check-label d-flex align-items-center valid">
                                <input id="field_3885036_2" class="form-check-input" name="field_3885036" type="radio" value="2"/>
                                自治会館2F
                              </label>
                            </div>
                          </div>
                          <div class="invalid-feedback" style={{display: "none"}}></div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name">
                      <legend>内容</legend>
                      <div class="form-group">
                        <label for="field_3885034_sei" class="visually-hidden">内容</label>
                        <input id="field_3885034_sei" class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder="ごみ集積所についての話し合い"/>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <fieldset class="form-fieldset form-fieldset-name">
                      <legend>備考欄</legend>
                      <div class="form-group">
                        <label class="visually-hidden">備考欄</label>
                        <textarea class="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxlength="2500" autocapitalize="off" placeholder=""></textarea>
                        <div class="invalid-feedback" style={{display: "none"}}></div>
                      </div>
                    </fieldset>
                    <div class="d-grid gap-2 form-buttons">
                      <input class="btn form-btn-submit" name="submit" type="submit" id="submit" value="確認画面へ"/>
                    </div>
                  </form>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default HallComponent;
