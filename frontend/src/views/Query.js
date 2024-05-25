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
    this.state = {
      errorMessages: this.errorMessages,
    }
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

  render() {
    return (
      <main id="main">
        <FQA/>
        <section className="main-item">
          <h2 className="main-title">
            <span className="title">情報提供・お問い合わせ</span>
          </h2>
          <form onSubmit={this.handleSubmit.bind(this)} action="#">
            <fieldset className="form-fieldset required">
              <legend>名前</legend>
              <div className="form-group">
                <input className="form-control" name="name" type="text" value="" maxLength="50" autoCapitalize="off" placeholder="田中 美里" required={true}/>
                <div className="error-message"></div>
              </div>
            </fieldset>
            <fieldset className="form-fieldset required">
              <legend>メールアドレス</legend>
              <div className="form-group">
                <input className="form-control" name="mail_address" type="text" value="" maxLength="254" autoCapitalize="off" placeholder="example@example.com" required={true}/>
                <div className="error-message"></div>
              </div>
            </fieldset>
            <fieldset className="form-fieldset">
              <legend>内容</legend>
              <div className="form-group">
                <textarea className="form-control" name="body" type="text" value="" autoCapitalize="off" placeholder=""></textarea>
                <div className="error-message"></div>
              </div>
            </fieldset>
            <div className="d-grid gap-2 form-buttons">
              <input className="btn form-btn-submit" name="submit" type="submit" value="確認画面へ"/>
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
