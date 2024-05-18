import React, { Component } from "react";
import AliasRoutes from "routes/AliasRoutes";
import { ServiceFactory } from 'services';
import { HallRequestConfirmModal } from 'components/modals';
import SideNavigations from 'components/SideNavigations';
import { connect } from 'react-redux';
import {
  openHallRequestConfirmModal,
  closeHallRequestConfirmModal,
} from "redux/modals/Action";
import { HallRequestModel } from 'models';


class HallComponent extends Component {

  constructor(props) {
    super(props);
    this.model = new HallRequestModel();
    this.state = {
      room: "1",
    }
  }

  componentDidMount() {
  }

  handleSubmit(ev) {
    // prevent move other page
    ev.preventDefault();
    // 標準入力検証
    if (ev.currentTarget.reportValidity() !== true) {
      return;
    }
    this.model = new HallRequestModel();
    this.model.setGroupName(ev.currentTarget.group_name.value);
    this.model.setResponsiblePerson(ev.currentTarget.responsible_person.value);
    this.model.setAddress(ev.currentTarget.address.value);
    this.model.setPhoneNumber(ev.currentTarget.phone_number.value);
    this.model.setEmailAddress(ev.currentTarget.email_address.value);
    this.model.setReason(ev.currentTarget.reason.value);
    this.model.setStartDateTime(ev.currentTarget.start_datetime.value);
    let t_sEndDateTime = ev.currentTarget.start_datetime.value.split('T')[0];
    t_sEndDateTime = t_sEndDateTime + 'T';
    t_sEndDateTime = t_sEndDateTime + ev.currentTarget.end_datetime.value;
    this.model.setEndDateTime(t_sEndDateTime);
    this.model.setRoom(this.state.room);
    this.model.setDetail(ev.currentTarget.detail.value);
    this.model.setNote(ev.currentTarget.note.value);

    this.props.openHallRequestConfirmModal();
  }

  render() {
    return (
      <main id="main">
        <HallRequestConfirmModal model={this.model}/>
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
          <div>
            <p>7以内にこちらから連絡がない場合は、電話番号 077-546-6905 にて、ご連絡をお願いいたします。</p>
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <fieldset class="form-fieldset form-fieldset-name required">
              <legend>団体名</legend>
              <div class="form-group">
                <input class="form-control form-name-sei" name="group_name" type="text" maxlength="255" autocapitalize="off" placeholder="ブロック1 1-1組" required="true"/>
                <div class="invalid-feedback" >test</div>
              </div>
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-name required">
              <legend>使用責任者</legend>
              <div class="form-group">
                <input class="form-control form-name-sei" name="responsible_person" type="text" maxlength="50" autocapitalize="off" placeholder="田中 美里" required="true"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-name required">
              <legend>住所</legend>
              <div class="form-group">
                <input class="form-control form-name-sei" name="address" type="text" maxlength="255" autocapitalize="off" placeholder="里5丁目7-22" required="true"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-name required">
              <legend>電話番号</legend>
              <div class="form-group">
                <input class="form-control form-name-sei" name="phone_number" type="text" maxlength="50" autocapitalize="off" placeholder="077-XXX-XXXX" required="true"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-name required">
              <legend>メールアドレス</legend>
              <div class="form-group">
                <input class="form-control form-name-sei" name="email_address" type="text" maxlength="255" autocapitalize="off" placeholder="example@example.com" required="true"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-name">
              <legend>使用目的(会合名称)</legend>
              <div class="form-group">
                <input class="form-control form-name-sei" name="reason" type="text" maxlength="255" autocapitalize="off" placeholder="ブロック1 1-1組の会合"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-name required">
              <legend>使用日時</legend>
              <div class="form-group">
                <input class="form-control form-name-sei" name="start_datetime" type="datetime-local" required="true"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
              から
              <div class="form-group">
                <input class="form-control form-name-sei" type="time" name="end_datetime" required="true"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
              まで
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-radiobutton required" data-fieldset-label="使用室名">
              <legend>使用室</legend>
              <div>
                <div class="form-group form-fieldgroup was-validated">
                  <div class="hall-list row g-2">
                    <div class="hall-select col-md-6">
                      <label class="form-label-radio-checkbox form-check-label align-items-center">
                        <input class="form-check-input" name="room[]" type="radio" value="1" onChange={() => this.setState({room: '1'})} checked={this.state.room === '1'}/>
                        大ホール
                      </label>
                    </div>
                    <div class="hall-select col-md-6">
                      <label class="form-label-radio-checkbox form-check-label align-items-center">
                        <input class="form-check-input" name="room[]" type="radio" value="2" onChange={() => this.setState({room: '2'})} checked={this.state.room === '2'}/>
                        2階和室
                      </label>
                    </div>
                    <div class="hall-select col-md-6">
                      <label class="form-label-radio-checkbox form-check-label align-items-center valid">
                        <input class="form-check-input" name="room[]" type="radio" value="3" onChange={() => this.setState({room: '3'})} checked={this.state.room === '3'}/>
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
                <input class="form-control form-name-sei" name="detail" type="text" maxlength="255" autocapitalize="off" placeholder="ごみ集積所についての話し合い"/>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset class="form-fieldset form-fieldset-name">
              <legend>備考</legend>
              <div class="form-group">
                <textarea class="form-control form-name-sei" name="note" type="text" autocapitalize="off" placeholder=""></textarea>
                <div class="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <div class="d-grid gap-2 form-buttons">
              <input class="btn form-btn-submit" name="submit" type="submit" value="申込内容を確認する"/>
            </div>
          </form>
        </section>
      </main>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    hallRequestConfirmModal: {
      isOpen: state.modals.hallRequestConfirmModalIsOpen,
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openHallRequestConfirmModal: function() {
      dispatch(openHallRequestConfirmModal());
    },
    closeHallRequestConfirmModal: function() {
      dispatch(closeHallRequestConfirmModal());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HallComponent);
