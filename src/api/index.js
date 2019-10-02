import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || 3001}/api`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
});

const api = {
  getSearchedVideos: key => instance.get(`/search-videos/${key}`),
  getSavedVideos: list =>
    instance.get(`/saved-videos/`, {
      params: { id: list }
    })
};

export default api;
