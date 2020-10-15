import React from 'react';

const Booking = (props) => {
  const { bookingInfo } = props;
  return (
    <div>
      <div>Room: {bookingInfo.roomId}</div>
      <div>User: {bookingInfo.userId}</div>
      <div>Meeting Start: {bookingInfo.start}</div>
      <div>Meeting End: {bookingInfo.finish}</div>
  </div>
  );
}

export default Booking;
