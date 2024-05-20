import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import {
  openHallRequestConfirmModal,
  closeHallRequestConfirmModal,
} from "redux/modals/Action";
import { ServiceFactory } from 'services';
import Lottie from "react-lottie";
import animationData from "assets/lotties/success_circle.json";


class HallRequestConfirmModal extends Component {
  static propTypes = {
    onSuccess: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
  }

  static defaultProps = {
    onSuccess: null,
    onOpened: null,
    onClosed: null,
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  openModal() {
    this.setState({
    });
    if(this.props.onOpened) {
      this.props.onOpened();
    }
  }

  closeModal() {
    if(this.props.onClosed) {
      this.props.onClosed();
      return;
    }
    this.props.closeHallRequestConfirmModal();
  }

  handleSendButton(ev) {
    // prevent move other page
    ev.preventDefault();
    var service = ServiceFactory.createHallService();
    service.request(this.props.model).then(() => {
      console.log('success');
    }).catch(err => {
      alert(err);
    });;
  }

  render() {
    return (
      <Modal
        isOpen={this.props.hallRequestConfirmModal.isOpen}
        toggle={this.closeModal.bind(this)}
        onOpened={this.openModal.bind(this)}
        scrollable
        className="hall-request-modal"
      >
        <ModalHeader className="header" toggle={this.closeModal.bind(this)}>
          里公民館使用申込
        </ModalHeader>
        <ModalBody className="body">
          <div className="body-inner">
            <div className="item">
              <label className="label">
                団体名
              </label>
              <div className="content">
                {this.props.model.getGroupName()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用責任者
              </label>
              <div className="content">
                {this.props.model.getResponsiblePerson()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                住所
              </label>
              <div className="content">
                {this.props.model.getAddress()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                電話番号
              </label>
              <div className="content">
                {this.props.model.getPhoneNumber()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                メールアドレス
              </label>
              <div className="content">
                {this.props.model.getEmailAddress()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用目的(会合名称)
              </label>
              <div className="content">
                {this.props.model.getReason()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用日時
              </label>
              <div className="content">
                {this.props.model.getStartDateTimeDisplay('YYYY年M月D日 HH時MM分')}〜{this.props.model.getEndDateTimeDisplay('HH時MM分')}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                使用室
              </label>
              <div className="content">
                {this.props.model.getRoomName()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                内容
              </label>
              <div className="content">
                {this.props.model.getDetail()}
              </div>
            </div>
            <hr/>
            <div className="item">
              <label className="label">
                備考
              </label>
              <div className="content" style={{whiteSpace: 'pre-line'}}>
                {this.props.model.getNote()}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="hall-request-modal-footer">
          <Button onClick={this.handleSendButton.bind(this)}>送信</Button>
        </ModalFooter>
      </Modal>
    );
  };
};
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

export default connect(mapStateToProps, mapDispatchToProps)(HallRequestConfirmModal);
