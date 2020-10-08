import {
  GET_ROOMS_SUCCESS,
  GET_ROOMS_PENDING,
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
        pending: false,
        rooms: action.rooms,
      };
    default:
      return state;
  }
}

export default rooms;
