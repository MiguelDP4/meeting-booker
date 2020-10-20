import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Booking from '../Components/Booking';

const RoomBookings = props => {
  const {
    room, loadBookings, bookings, deleteBooking, user,
  } = props;
  useEffect(() => { loadBookings(room.id); }, [loadBookings, room.id]);
  return (
    <div className="bookings-container">
      {bookings.length > 0 && bookings.map(booking => (
        <Booking
          key={`booking-${booking.id}-room-${room.id}`}
          bookingsList={bookings}
          bookingInfo={booking}
          deleteBooking={deleteBooking}
          user={user}
        />
      ))}
    </div>
  );
};

RoomBookings.propTypes = {
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
  room: PropTypes.shape({
    id: PropTypes.number,
    size: PropTypes.number,
    projector: PropTypes.bool,
  }).isRequired,
  loadBookings: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

export default RoomBookings;
