import {
  SEARCH_VIDEO_FAILURE,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS
} from '../constants';

const initialState = {
  videos: [],
  error: null,
  success: false,
  loading: false
};

export default function searchVideoReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_VIDEO_REQUEST: {
      return {
        ...state,
        videos: [],
        error: null,
        success: false,
        loading: true
      };
    }
    case SEARCH_VIDEO_SUCCESS: {
      return {
        ...state,
        videos: action.videos,
        error: null,
        success: true,
        loading: false
      };
    }
    case SEARCH_VIDEO_FAILURE: {
      return {
        ...state,
        videos: [],
        error: action.error,
        success: true,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}
