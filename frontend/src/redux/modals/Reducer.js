import {
  MODAL_HALL_REQUEST_CONFIRM_OPEN,
  MODAL_HALL_REQUEST_CONFIRM_CLOSE,
} from "../constants/";

const INIT_STATE = {
  hallRequestConfirmModalIsOpen: false,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MODAL_HALL_REQUEST_CONFIRM_OPEN:
      return {
        ...state,
        hallRequestConfirmModalIsOpen: true,
      };
    case MODAL_HALL_REQUEST_CONFIRM_CLOSE:
      return {
        ...state,
        hallRequestConfirmModalIsOpen: false,
      };
    default:
      return state;
  }
};
