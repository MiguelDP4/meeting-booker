import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_PENDING,
  GET_BOOKINGS_ERROR,
  INITIAL_GET_BOOKING_STATE,
  POST_BOOKING_ERROR,
  POST_BOOKING_PENDING,
  POST_BOOKING_SUCCESS,
  DELETE_BOOKING_ERROR,
  DELETE_BOOKING_PENDING,
  DELETE_BOOKING_SUCCESS,
  CLEAR_LOCAL_BOOKINGS,
} from '../constants';

function bookings(state = INITIAL_GET_BOOKING_STATE, action) {
  let newBookingsArray = [];
  let indexToDelete;
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
    case CLEAR_LOCAL_BOOKINGS:
      return {
        ...state,
        bookings: [],
        posted: {},
      };
    case DELETE_BOOKING_SUCCESS:
      newBookingsArray = [...state.bookings];
      indexToDelete = newBookingsArray
        .indexOf(newBookingsArray.find(booking => booking.id === action.deleted.id));
      newBookingsArray.splice(indexToDelete, 1);
      return {
        ...state,
        pending: false,
        bookings: newBookingsArray,
      };
    case DELETE_BOOKING_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DELETE_BOOKING_ERROR:
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
