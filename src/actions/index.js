import {
  GET_SAVED_VIDEO_FAILURE,
  GET_SAVED_VIDEO_REQUEST,
  GET_SAVED_VIDEO_SUCCESS,
  SEARCH_VIDEO_FAILURE,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SET_SAVED_VIDEO,
  SET_VIDEO_ID,
  SET_MODAL_VISIBLE
} from '../constants';
import api from '../api';

function searchVideoRequest() {
  return {
    type: SEARCH_VIDEO_REQUEST
  };
}

function searchVideoSuccess(videos) {
  return {
    type: SEARCH_VIDEO_SUCCESS,
    videos
  };
}

function searchVideoFailure(error) {
  return {
    type: SEARCH_VIDEO_FAILURE,
    error
  };
}

export function searchVideo(key) {
  return async dispatch => {
    try {
      dispatch(searchVideoRequest());
      const res = await api.getSearchedVideos(key);
      dispatch(searchVideoSuccess(res.data.videos));
      return res.data;
    } catch (error) {
      dispatch(searchVideoFailure(`Error`));
      throw error;
    }
  };
}

function getSavedVideoRequest() {
  return {
    type: GET_SAVED_VIDEO_REQUEST
  };
}

function getSavedVideoSuccess(videos) {
  return {
    type: GET_SAVED_VIDEO_SUCCESS,
    videos
  };
}

function getSavedVideoFailure(error) {
  return {
    type: GET_SAVED_VIDEO_FAILURE,
    error
  };
}

export function getSavedVideo(list) {
  return async dispatch => {
    try {
      dispatch(getSavedVideoRequest());
      const res = await api.getSavedVideos(list);
      dispatch(getSavedVideoSuccess(res.data.videos));
      return res.data;
    } catch (error) {
      console.log(error);
      dispatch(getSavedVideoFailure(`Error`));
      throw error;
    }
  };
}

export function setSavedVideo(videos) {
  return {
    type: SET_SAVED_VIDEO,
    videos
  };
}
export function setModalVisible(visible) {
  return {
    type: SET_MODAL_VISIBLE,
    visible
  };
}
export function setVideoId(id) {
  return {
    type: SET_VIDEO_ID,
    id
  };
}
