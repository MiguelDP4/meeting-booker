import React, { useEffect } from 'react';
import Booking from '../Components/Booking';

function RoomBookings(props) {
  const { room, loadBookings, bookings } = props;
  useEffect(() => { loadBookings(room.id) }, [loadBookings, room.id]);
  return (
    <div>
      {bookings.map(booking => (
        <Booking bookingInfo={booking} />
        ))}
    </div>
  );
}

export default RoomBookings;
