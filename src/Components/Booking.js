import React from 'react';
import { Link } from 'react-router-dom';

const Booking = (props) => {
  const { bookingInfo, user, deleteBooking, bookingsList } = props;
  const deleteMethod = () => {
    deleteBooking(bookingInfo.id);
    const removeIndex = bookingsList
  }
  return (
    <div>
      <div>Room: {bookingInfo.roomId}</div>
      <div>User: {bookingInfo.userId}</div>
      <div>Meeting Start: {bookingInfo.start}</div>
      <div>Meeting End: {bookingInfo.finish}</div>
      { bookingInfo.userId == user.id && (
        <div>
          <a key={`booking-${bookingInfo.id}-delete`}
             href="#" onClick={deleteMethod}>Delete This Booking</a>
        </div>
        )
      }
    </div>
  );
}

export default Booking;
