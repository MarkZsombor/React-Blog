import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import PostsReducer from './reducer_posts';
import UsersReducer from './reducer_users';

export default combineReducers({
  auth: authReducer,
  posts: PostsReducer,
  users: UsersReducer,
  form: formReducer,
});
