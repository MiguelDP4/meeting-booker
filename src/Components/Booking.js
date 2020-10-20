import React from 'react';
import { format } from 'date-fns';
import { PropTypes } from 'prop-types';

const Booking = props => {
  const { bookingInfo, user, deleteBooking } = props;
  const deleteMethod = () => {
    deleteBooking(bookingInfo.id);
  };
  const bookingStartDate = Date.parse(bookingInfo.start);
  const bookingFinishDate = Date.parse(bookingInfo.finish);
  return (
    <div className="booking">
      <div className="booking-info">
        <div>
          <b>Room:</b>
          {' '}
          {bookingInfo.roomId}
        </div>
        <div>
          <b>Meeting Start:</b>
          {' '}
          {format(new Date(bookingStartDate), 'EEEE, MMMM d, yyyy | p')}
        </div>
        <div>
          <b>Meeting End:</b>
          {' '}
          {format(new Date(bookingFinishDate), 'EEEE, MMMM d, yyyy | p')}
        </div>
      </div>
      { bookingInfo.userId === user.id && (
        <div className="delete-booking-button">
          <button
            key={`booking-${bookingInfo.id}-delete`}
            type="button"
            href="#"
            onClick={deleteMethod}
          >
            Delete This Booking
          </button>
        </div>
      )}
    </div>
  );
};

Booking.propTypes = {
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  bookingInfo: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    roomId: PropTypes.number,
    start: PropTypes.string,
    finish: PropTypes.string,
  }).isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

export default Booking;
