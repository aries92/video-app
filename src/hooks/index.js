import React, { useContext, useState } from 'react';
import api from '../api';
import { AppContext } from '../context';

export function useSearchVideo() {
  const [videos, setVideos] = useState([]);
  const [videosLoading, setVideosLoading] = useState(false);
  const [videosError, setVideosError] = useState('');

  async function searchVideo(key) {
    try {
      setVideosLoading(true);
      const res = await api.getSearchedVideos(key);
      setVideosLoading(false);
      setVideos(res.data.videos);
    } catch (error) {
      setVideosLoading(false);
      setVideosError(`Error`);
    }
  }

  return {
    videos,
    videosError,
    videosLoading,
    searchVideo
  };
}
export function useSavedVideo() {
  const [savedVideo, setSavedVideo] = useState([]);
  const [savedVideoLoading, setSavedVideoLoading] = useState(false);
  const [savedVideoError, setSavedVideoError] = useState('');

  async function getSavedVideo(videoIdList) {
    try {
      setSavedVideoLoading(true);
      const res = await api.getSavedVideos(videoIdList);
      setSavedVideo(res.data.videos);
      setSavedVideoLoading(false);
    } catch (error) {
      setSavedVideoError(`Error`);
    }
  }

  return {
    savedVideo,
    savedVideoError,
    savedVideoLoading,
    setSavedVideo,
    getSavedVideo
  };
}

export function useModal() {
  const [{ videoId, modalVisible }, setContext] = useContext(AppContext);

  function showModal(id) {
    setContext({
      modalVisible: true,
      videoId: id
    });
  }

  function hideModal() {
    setContext({
      modalVisible: false,
      videoId: null
    });
  }

  return {
    modalVisible,
    videoId,
    showModal,
    hideModal
  };
}
