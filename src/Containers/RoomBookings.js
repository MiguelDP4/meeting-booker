import React, { useEffect } from 'react';
import Booking from '../Components/Booking';

function RoomBookings(props) {
  const { room, loadBookings, bookings, deleteBooking, user } = props;
  useEffect(() => { loadBookings(room.id) }, [loadBookings, room.id]);
  return (
    <div>
      {bookings.map(booking => (
        <Booking bookingsList={bookings} bookingInfo={booking} deleteBooking={deleteBooking} user={user} />
        ))}
    </div>
  );
}

export default RoomBookings;
