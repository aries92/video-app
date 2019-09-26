import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || 3001}/api`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
});

const api = {
  getSearchedVideos: key => instance.get(`/search-videos/${key}`),
  getSavedVideos: list =>
    instance.get(`/saved-videos/`, {
      params: { id: list },
      paramsSerializer: params => qs.stringify(params)
    })
};

export default api;
