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
        name: action.name,
        id: action.id,
      };
    case LOG_IN_ERROR:
      return {
        pending: false,
        loggedIn: false,
        name: action.name,
        id: action.id,
      };
    case LOG_OUT:
      return {
        pending: false,
        loggedIn: false,
        name: null,
        id: null,
      };
    default:
      return state;
  }
}

export default user;
