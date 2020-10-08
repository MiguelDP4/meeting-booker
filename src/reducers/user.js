import {
  LOG_IN_PENDING,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT,
  INITIAL_USER_STATE,
} from '../constants';

function user(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
    case LOG_IN_PENDING:
      return {
        ...state,
        pending: true,
        loggedIn: false,
      };
    case LOG_IN_SUCCESS:
      return {
        pending: false,
        loggedIn: true,
        user: action.user,
      };
    case LOG_IN_ERROR:
      return {
        pending: false,
        loggedIn: false,
        user: action.user
      }
    case LOG_OUT:
      return {
        pending: true,
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}

export default user;