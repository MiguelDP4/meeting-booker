import React from 'react';

const Booking = (props) => {
  const { bookingInfo, user, deleteBooking } = props;
  const deleteMethod = () => {
    deleteBooking(bookingInfo.id);
  }
  return (
    <div>
      <div>Room: {bookingInfo.roomId}</div>
      <div>Meeting Start: {bookingInfo.start}</div>
      <div>Meeting End: {bookingInfo.finish}</div>
      { bookingInfo.userId === user.id && (
        <div>
          <button key={`booking-${bookingInfo.id}-delete`}
             href="#" onClick={deleteMethod}>Delete This Booking</button>
        </div>
        )
      }
    </div>
  );
}

export default Booking;
