import axios from 'axios';
import {
  FETCH_USER,
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST,
} from './types';

// export const fetchUser = () => {
//   return (dispatch) => {
//     axios.get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPosts = () => async (dispatch) => {
  const request = await axios.get('api/posts');

  dispatch({ type: FETCH_POSTS, payload: request });
};

export function createPost(values, callback) {
  return (dispatch) => {
    axios.post('/api/posts', values)
      .then(
        () => callback(),
        res => dispatch({ type: CREATE_POST, payload: res }),
      );
  };
}

export const fetchPost = (id) => async (dispatch) => {
  const request = await axios.get(`/api/posts/${id}`);

  dispatch ({ type: FETCH_POST, payload: request });
};

export function deletePost(id, callback) {
  const request = axios.delete(`/api/posts/${id}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id,
  };
}
