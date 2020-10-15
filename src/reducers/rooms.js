import {
  GET_ROOMS_SUCCESS,
  GET_ROOMS_PENDING,
  GET_ROOMS_ERROR,
  INITIAL_GET_ROOM_STATE,
} from '../constants';

function rooms(state = INITIAL_GET_ROOM_STATE, action) {
  switch (action.type) {
    case GET_ROOMS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        pending: false,
        rooms: action.rooms,
      };
    case GET_ROOMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default rooms;
