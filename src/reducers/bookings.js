import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_PENDING,
  GET_BOOKINGS_ERROR,
  INITIAL_GET_BOOKING_STATE,
  POST_BOOKING_ERROR,
  POST_BOOKING_PENDING,
  POST_BOOKING_SUCCESS,
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
        bookings: action.bookings,
      };
    case GET_BOOKINGS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case POST_BOOKING_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case POST_BOOKING_PENDING:
      return {
        ...state,
        pending: true,
      };
    case POST_BOOKING_SUCCESS:
      return {
        ...state,
        pending: false,
        posted: action.posted,
      };
    default:
      return state;
  }
}

export default bookings;
