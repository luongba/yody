import { HIDE_MODAL, SET_DATA_MODAL, SHOW_MODAL } from "../types/ModalType";
const initialState = {
  slug: "ao-somi-tay-dai-17",
  isShow: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MODAL:
      state.slug = action.slug
      state.isShow = true;
      return { ...state };
    case SHOW_MODAL:
      state.isShow = true;
      return { ...state };
    case HIDE_MODAL:
      state.isShow = false;
      return { ...state };
    default:
      return state;
  }
};
