import {
  GET_SAVED_VIDEO_REQUEST,
  GET_SAVED_VIDEO_SUCCESS,
  GET_SAVED_VIDEO_FAILURE,
  SET_SAVED_VIDEO
} from '../constants';

const initialState = {
  videos: [],
  error: null,
  success: false,
  loading: false
};

export default function savedVideoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVED_VIDEO_REQUEST: {
      return {
        ...state,
        videos: [],
        error: null,
        success: false,
        loading: true
      };
    }
    case GET_SAVED_VIDEO_SUCCESS: {
      return {
        ...state,
        videos: action.videos,
        error: null,
        success: true,
        loading: false
      };
    }
    case GET_SAVED_VIDEO_FAILURE: {
      return {
        ...state,
        videos: [],
        error: action.error,
        success: true,
        loading: false
      };
    }
    case SET_SAVED_VIDEO: {
      return {
        ...state,
        videos: action.videos
      };
    }
    default: {
      return state;
    }
  }
}
