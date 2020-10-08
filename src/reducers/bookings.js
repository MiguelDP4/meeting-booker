import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_PENDING,
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
        pending: false,
        rooms: action.bookings,
      };
    default:
      return state;
  }
}

export default bookings;
