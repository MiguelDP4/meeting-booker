import React, { useEffect } from 'react';
import Booking from '../Components/Booking';

function RoomBookings(props) {
  const { room, loadBookings, bookings, deleteBooking } = props;
  useEffect(() => { loadBookings(room.id) }, [loadBookings, room.id]);
  return (
    <div>
      {bookings.map(booking => (
        <Booking bookingsList={bookings} bookingInfo={booking} deleteBooking={deleteBooking} />
        ))}
    </div>
  );
}

export default RoomBookings;
