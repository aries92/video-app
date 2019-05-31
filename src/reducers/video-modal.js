import { SET_VIDEO_ID, SET_MODAL_VISIBLE } from '../constants';

const initialState = {
  visible: false,
  videoId: null
};

export default function videoModalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO_ID: {
      return {
        ...state,
        videoId: action.id
      };
    }
    case SET_MODAL_VISIBLE: {
      return {
        ...state,
        visible: action.visible
      };
    }
    default: {
      return state;
    }
  }
}
