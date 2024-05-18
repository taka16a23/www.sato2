import {
  MODAL_HALL_REQUEST_CONFIRM_OPEN,
  MODAL_HALL_REQUEST_CONFIRM_CLOSE,
} from "../constants/";

export const openHallRequestConfirmModal = () => {
  return {
    type: MODAL_HALL_REQUEST_CONFIRM_OPEN,
    payload: true
  }
}

export const closeHallRequestConfirmModal = () => {
  return {
    type: MODAL_HALL_REQUEST_CONFIRM_CLOSE,
    payload: false
  }
}
