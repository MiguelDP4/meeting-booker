import {
  LOG_IN_ERROR,
  LOG_IN_PENDING,
  LOG_IN_SUCCESS,
  GET_ROOMS_ERROR,
  GET_ROOMS_PENDING,
  GET_ROOMS_SUCCESS,
  GET_BOOKINGS_ERROR,
  GET_BOOKINGS_PENDING,
  GET_BOOKINGS_SUCCESS,
  POST_BOOKING_SUCCESS,
  POST_BOOKING_PENDING,
  POST_BOOKING_ERROR,
  DELETE_BOOKING_ERROR,
  DELETE_BOOKING_PENDING,
  DELETE_BOOKING_SUCCESS,
  LOG_OUT,
  CLEAR_LOCAL_BOOKINGS,
} from '../constants';
import {
  ApiLogIn,
  ApiGetRooms,
  ApiGetBookings,
  ApiCreateBooking,
  ApiDeleteBooking,
} from '../ApiCalls';

const LogInPending = pending => ({
  type: LOG_IN_PENDING,
  pending,
});

const LogInError = user => ({
  type: LOG_IN_ERROR,
  name: user.name,
  id: user.id,
});

const LogInSuccess = user => ({
  type: LOG_IN_SUCCESS,
  name: user.name,
  id: user.id,
});

export const logIn = (username, password) => async dispatch => {
  dispatch(LogInPending());
  const response = await ApiLogIn(username, password);
  if (response.name) {
    return dispatch(LogInSuccess(response));
  }
  return dispatch(LogInError({ name: null, id: null }));
};

export const logOut = () => ({
  type: LOG_OUT,
});

const LoadRoomsPending = pending => ({
  type: GET_ROOMS_PENDING,
  pending,
});

const LoadRoomsError = error => ({
  type: GET_ROOMS_ERROR,
  error,
});

const LoadRoomsSuccess = rooms => ({
  type: GET_ROOMS_SUCCESS,
  rooms,
});

export const loadRooms = () => async dispatch => {
  dispatch(LoadRoomsPending());
  const response = await ApiGetRooms();
  if (response) {
    return dispatch(LoadRoomsSuccess(response));
  }
  return dispatch(LoadRoomsError({
    message: 'Could not find rooms',
  }));
};

export const clearBookings = () => ({
  type: CLEAR_LOCAL_BOOKINGS,
});

const loadBookingsPending = pending => ({
  type: GET_BOOKINGS_PENDING,
  pending,
});

const loadBookingsSuccess = bookings => ({
  type: GET_BOOKINGS_SUCCESS,
  bookings,
});

const loadBookingsError = error => ({
  type: GET_BOOKINGS_ERROR,
  error,
});

export const loadBookings = (roomId = null, userId = null,
  lowLimit = null,
  highLimit = null) => async dispatch => {
  dispatch(loadBookingsPending());
  const response = await ApiGetBookings(roomId, userId, lowLimit, highLimit);
  if (response) {
    return dispatch(loadBookingsSuccess(response));
  }
  return dispatch(loadBookingsError({
    message: 'Could not find any bookings with your parameters',
  }));
};

const createBookingPending = pending => ({
  type: POST_BOOKING_PENDING,
  pending,
});

const createBookingSuccess = posted => ({
  type: POST_BOOKING_SUCCESS,
  posted,
});

const createBookingError = error => ({
  type: POST_BOOKING_ERROR,
  error,
});

export const createBooking = (userId, roomId, start, finish) => async dispatch => {
  dispatch(createBookingPending());
  const response = await ApiCreateBooking(roomId, userId, start, finish);
  if (response) {
    return dispatch(createBookingSuccess(response));
  }
  return dispatch(createBookingError({
    message: 'Could not find any bookings with your parameters',
  }));
};

const deleteBookingPending = pending => ({
  type: DELETE_BOOKING_PENDING,
  pending,
});

const deleteBookingSuccess = deleted => ({
  type: DELETE_BOOKING_SUCCESS,
  deleted,
});

const deleteBookingError = error => ({
  type: DELETE_BOOKING_ERROR,
  error,
});

export const deleteBooking = bookingId => async dispatch => {
  dispatch(deleteBookingPending());
  const response = await ApiDeleteBooking(bookingId);
  if (response) {
    return dispatch(deleteBookingSuccess(response));
  }
  return dispatch(deleteBookingError({
    message: 'Could not find any bookings with your parameters',
  }));
};
