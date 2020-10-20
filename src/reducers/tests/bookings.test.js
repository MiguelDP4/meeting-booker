import bookings from '../bookings';
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
} from '../../constants';

const bookingsList = [
  {
    id: 1,
    userId: 1,
    roomId: 1,
    start: '2020-10-13T15:30:00.000Z',
    finish: '2020-10-13T16:30:00.000Z',
  },
  {
    id: 2,
    userId: 2,
    roomId: 2,
    start: '2020-10-13T15:30:00.000Z',
    finish: '2020-10-13T16:30:00.000Z',
  },
  {
    id: 3,
    userId: 3,
    roomId: 3,
    start: '2020-10-13T15:30:00.000Z',
    finish: '2020-10-13T16:30:00.000Z',
  },
  {
    id: 4,
    userId: 4,
    roomId: 4,
    start: '2020-10-13T15:30:00.000Z',
    finish: '2020-10-13T16:30:00.000Z',
  },
];

const pendingBookingRequest = {
  type: GET_BOOKINGS_PENDING,
};

const pendingBookingResult = {
  bookings: [],
  pending: true,
  posted: {},
};

const successfulBookingRequest = {
  type: GET_BOOKINGS_SUCCESS,
  bookings: bookingsList,
  pending: false,
};

const successfulBookingRequestResult = {
  pending: false,
  bookings: bookingsList,
  posted: {},
};

const errorBookingRequest = {
  type: GET_BOOKINGS_ERROR,
  bookings: [],
  pending: false,
  error: 'not found',
};

const errorBookingRequestResult = {
  bookings: [],
  pending: false,
  error: 'not found',
  posted: {},
};

it('changes status of request to pending true', () => {
  expect(bookings(INITIAL_GET_BOOKING_STATE, pendingBookingRequest))
    .toEqual(pendingBookingResult);
});

it('changes status of request to pending false and payload contains bookings', () => {
  expect(bookings(INITIAL_GET_BOOKING_STATE, successfulBookingRequest))
    .toEqual(successfulBookingRequestResult);
});

it('changes status of request to pending false and payload is empty', () => {
  expect(bookings(INITIAL_GET_BOOKING_STATE, errorBookingRequest))
    .toEqual(errorBookingRequestResult);
});

const newBooking = {
  userId: 4,
  roomId: 6,
  start: '2020-15-13T15:30:00.000Z',
  finish: '2020-15-13T16:30:00.000Z',
};

const pendingPostBookingRequest = {
  type: POST_BOOKING_PENDING,
  newBooking,
};

const pendingPostBookingResult = {
  bookings: [],
  pending: true,
  posted: {},
};

const successfulPostBookingRequest = {
  type: POST_BOOKING_SUCCESS,
  posted: newBooking,
  pending: false,
};

const successfulPostBookingRequestResult = {
  pending: false,
  bookings: [],
  posted: newBooking,
};

const errorPostBookingRequest = {
  type: POST_BOOKING_ERROR,
  bookings: [],
  pending: false,
  error: 'Could not post',
};

const errorPostBookingRequestResult = {
  bookings: [],
  pending: false,
  error: 'Could not post',
  posted: {},
};

it('changes status of request to pending true', () => {
  expect(bookings(INITIAL_GET_BOOKING_STATE, pendingPostBookingRequest))
    .toEqual(pendingPostBookingResult);
});

it('changes status of request to pending false and payload contains bookings', () => {
  expect(bookings(INITIAL_GET_BOOKING_STATE, successfulPostBookingRequest))
    .toEqual(successfulPostBookingRequestResult);
});

it('changes status of request to pending false and payload is empty', () => {
  expect(bookings(INITIAL_GET_BOOKING_STATE, errorPostBookingRequest))
    .toEqual(errorPostBookingRequestResult);
});

const delBooking = {
  id: 2,
  userId: 2,
  roomId: 2,
  start: '2020-10-13T15:30:00.000Z',
  finish: '2020-10-13T16:30:00.000Z',
};

const bookingsListAfterDelete = [
  {
    id: 1,
    userId: 1,
    roomId: 1,
    start: '2020-10-13T15:30:00.000Z',
    finish: '2020-10-13T16:30:00.000Z',
  },
  {
    id: 3,
    userId: 3,
    roomId: 3,
    start: '2020-10-13T15:30:00.000Z',
    finish: '2020-10-13T16:30:00.000Z',
  },
  {
    id: 4,
    userId: 4,
    roomId: 4,
    start: '2020-10-13T15:30:00.000Z',
    finish: '2020-10-13T16:30:00.000Z',
  },
];

const pendingDeleteBookingRequest = {
  type: DELETE_BOOKING_PENDING,
  deleted: delBooking,
};

const pendingDeleteBookingResult = {
  bookings: bookingsList,
  pending: true,
  posted: {},
};

const successfulDeleteBookingRequest = {
  type: DELETE_BOOKING_SUCCESS,
  posted: newBooking,
  pending: false,
  deleted: delBooking,
};

const successfulDeleteBookingRequestResult = {
  pending: false,
  bookings: bookingsListAfterDelete,
  posted: {},
};

const errorDeleteBookingRequest = {
  type: DELETE_BOOKING_ERROR,
  bookings: bookingsList,
  pending: false,
  error: 'Could not delete',
};

const errorDeleteBookingRequestResult = {
  bookings: bookingsList,
  pending: false,
  error: 'Could not delete',
  posted: {},
};

const INITIAL_DEL_STATE = {
  pending: false,
  bookings: bookingsList,
  posted: {},
};

it('changes status of request to pending true', () => {
  expect(bookings(INITIAL_DEL_STATE, pendingDeleteBookingRequest))
    .toEqual(pendingDeleteBookingResult);
});

it('changes status of request to pending false and payload has removed the booking', () => {
  expect(bookings(INITIAL_DEL_STATE, successfulDeleteBookingRequest))
    .toEqual(successfulDeleteBookingRequestResult);
});

it('changes status of request to pending false and payload has not removed the booking', () => {
  expect(bookings(INITIAL_DEL_STATE, errorDeleteBookingRequest))
    .toEqual(errorDeleteBookingRequestResult);
});
