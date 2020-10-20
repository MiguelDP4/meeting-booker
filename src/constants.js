export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';
export const GET_ROOMS_PENDING = 'GET_ROOMS_PENDING';
export const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
export const INITIAL_GET_ROOM_STATE = {
  pending: false,
  rooms: [],
};

export const CLEAR_LOCAL_BOOKINGS = 'CLEAR_LOCAL_BOOKINGS';
export const GET_BOOKINGS_SUCCESS = 'GET_BOOKINGS_SUCCESS';
export const GET_BOOKINGS_PENDING = 'GET_BOOKINGS_PENDING';
export const GET_BOOKINGS_ERROR = 'GET_BOOKINGS_ERROR';
export const POST_BOOKING_SUCCESS = 'POST_BOOKING_SUCCESS';
export const POST_BOOKING_PENDING = 'POST_BOOKING_PENDING';
export const POST_BOOKING_ERROR = 'POST_BOOKING_ERROR';
export const DELETE_BOOKING_ERROR = 'DELETE_BOOKING_ERROR';
export const DELETE_BOOKING_PENDING = 'DELETE_BOOKING_PENDING';
export const DELETE_BOOKING_SUCCESS = 'DELETE_BOOKING_SUCCESS';
export const INITIAL_GET_BOOKING_STATE = {
  pending: false,
  bookings: [],
  posted: {},
};

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_PENDING = 'LOG_IN_PENDING';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const INITIAL_USER_STATE = {
  pending: false,
  loggedIn: false,
  name: "",
  id: null,
};

export const INITIAL_STORE_STATE = {
  rooms: INITIAL_GET_ROOM_STATE,
  bookings: INITIAL_GET_BOOKING_STATE,
  user: INITIAL_USER_STATE,
};
