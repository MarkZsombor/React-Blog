import _ from 'lodash';
import { FETCH_USERS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      const userObj = _.mapKeys(action.payload.reverse(), '_id');
      const newState = Object.assign({}, state, userObj);
      return newState;
    default:
      return state;
  }
}

