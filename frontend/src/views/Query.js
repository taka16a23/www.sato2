import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  openHallRequestConfirmModal,
  closeHallRequestConfirmModal,
} from "redux/modals/Action";
import { ServiceFactory } from 'services';
import FQA from 'components/FQA'


class QueryComponent extends Component {

  constructor(props) {
    super(props);
    this.errorMessages = {
    };
    this.models = [];
    this.activeStates = {};
    this.state = {
      modelLength: this.models.length,
      activeStatesLength: this.activeStates.length,
      errorMessages: this.errorMessages,
    }
  }

  componentDidMount() {
    var oParams = new URLSearchParams();
    var service = ServiceFactory.createFrequentlyQuetionAnswerService();
    service.listFAQ(oParams).then(arrModels => {
      this.models = arrModels;
      var isActive = true;
      this.models.map((oModel) => {
        this.activeStates[oModel.id] = isActive;
        isActive = false;
      });
      this.setState({
        modelLength: this.models.length,
        activeStates: this.activeStates.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  clearErrorMessages() {
    for (var key in this.errorMessages) {
      this.errorMessages[key] = '';
    }
  }

  handleSubmit(ev) {
    // prevent move other page
    ev.preventDefault();
  }

  handleCloseModal(isFinished) {
    if (isFinished !== true) {
      return;
    }
    window.location.reload();
  }

  handleOnClickFAQ(oModel) {
    this.activeStates[oModel.id] = !this.activeStates[oModel.id];
      this.setState({
        activeStates: this.activeStates.length,
      });
  }

  render() {
    return (
      <main id="main">
        <FQA/>
        <section className="main-item">
          <h2 className="main-title">
            <span className="title">情報提供・お問い合わせ</span>
          </h2>
          <p>7以内にこちらから連絡がない場合は、電話番号 077-546-6905 にて、ご連絡をお願いいたします。</p>
          <form>
            <fieldset className="form-fieldset form-fieldset-name required">
              <legend>名前</legend>
              <div className="form-group">
                <input id="field_3885034_sei" className="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxLength="2500" autoCapitalize="off" placeholder="田中 美里" required="" data-pattern="1"/>
                <div className="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset className="form-fieldset form-fieldset-name required">
              <legend>メールアドレス</legend>
              <div className="form-group">
                <input id="field_3885034_sei" className="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxLength="2500" autoCapitalize="off" placeholder="example@example.com" required="" data-pattern="1"/>
                <div className="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <fieldset className="form-fieldset form-fieldset-name">
              <legend>内容</legend>
              <div className="form-group">
                <textarea className="form-control form-name-sei" name="field_3885034_sei" type="text" value="" maxLength="2500" autoCapitalize="off" placeholder=""></textarea>
                <div className="invalid-feedback" style={{display: "none"}}></div>
              </div>
            </fieldset>
            <div className="d-grid gap-2 form-buttons">
              <input className="btn form-btn-submit" name="submit" type="submit" id="submit" value="確認画面へ"/>
            </div>
          </form>
        </section>
      </main>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    // hallRequestConfirmModal: {
    // isOpen: state.modals.hallRequestConfirmModalIsOpen,
    // },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // openHallRequestConfirmModal: function() {
    //   dispatch(openHallRequestConfirmModal());
    // },
    // closeHallRequestConfirmModal: function() {
    //   dispatch(closeHallRequestConfirmModal());
    // },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryComponent);
