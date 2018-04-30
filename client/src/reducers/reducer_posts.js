import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      const post = action.payload.data;
      let newState = { ...state, };
      newState[post._id] = post;
      return newState;
    case FETCH_POSTS:
      let posts = _.sortBy(action.payload.data, "createDate");
      const postObj = _.mapKeys(posts.reverse(), '_id');
      newState = Object.assign({}, state, postObj);
      return newState;    
    default:
      return state;
  }
}

