import React from 'react';
import { Link } from 'react-router-dom';

const Booking = (props) => {
  const { bookingInfo, user } = props;
  return (
    <div>
      <div>Room: {bookingInfo.roomId}</div>
      <div>User: {bookingInfo.userId}</div>
      <div>Meeting Start: {bookingInfo.start}</div>
      <div>Meeting End: {bookingInfo.finish}</div>
      { bookingInfo.userId == user.id && (
        <div>
          <Link key={`booking-editor-link-${bookingInfo.id}`} 
                to={`/edit_booking_${bookingInfo.id}`}>Edit This Booking</Link>
          <a key={`booking-${bookingInfo.id}-delete`}
             href="#">Delete This Booking</a>
        </div>
        )
      }
    </div>
  );
}

export default Booking;
