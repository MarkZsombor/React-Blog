import axios from 'axios';
// import rootReducer from '../reducers';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// api key value doesn't matter as long as its unique
const API_KEY = '?key=PURPLEDOGDISHWASHER';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
