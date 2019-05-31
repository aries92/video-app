import { combineReducers } from 'redux';
import searchVideoReducer from './search-video';
import savedVideoReducer from './saved-video';
import videoModalReducer from './video-modal';

export default combineReducers({
  searchVideoReducer,
  savedVideoReducer,
  videoModalReducer
});
