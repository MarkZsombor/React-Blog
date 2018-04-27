import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import PostsReducer from './reducer_posts';

export default combineReducers({
  auth: authReducer,
  posts: PostsReducer,
  form: formReducer,
});
