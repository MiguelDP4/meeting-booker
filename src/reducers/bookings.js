import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_PENDING,
  GET_BOOKINGS_ERROR,
  INITIAL_GET_BOOKING_STATE,
} from '../constants';

function bookings(state = INITIAL_GET_BOOKING_STATE, action) {
  switch (action.type) {
    case GET_BOOKINGS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        rooms: action.bookings,
      };
    case GET_BOOKINGS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default bookings;
