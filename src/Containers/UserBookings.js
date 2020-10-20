import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Booking from '../Components/Booking';

const UserBookings = props => {
  const {
    user, loadBookings, bookings, deleteBooking,
  } = props;
  useEffect(() => { loadBookings(null, user.id); }, [loadBookings, user.id]);
  return (
    <div className="bookings-container">
      {bookings.length > 0 ? bookings.map(booking => (
        <Booking
          key={`user-${user.id}-booking-${booking.id}`}
          bookingsList={bookings}
          bookingInfo={booking}
          user={user}
          deleteBooking={deleteBooking}
        />
      )) : (<div>Searching user bookings</div>)}
    </div>
  );
};

UserBookings.propTypes = {
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  bookings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    roomId: PropTypes.number,
    start: PropTypes.string,
    finish: PropTypes.string,
  })).isRequired,
  loadBookings: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

export default UserBookings;
