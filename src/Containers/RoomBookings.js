import React, { useEffect } from 'react';

function RoomBookings(props) {
  const { room, loadBookings, bookings } = props;
  useEffect(() => { loadBookings(room.id) }, [loadBookings, room.id]);
  return (
    <div>
      {bookings.map(booking => (
        <div key={`room-${room.id}-booking-${booking.id}`}>
          {booking.id}
        </div>
        ))}
    </div>
  );
}

export default RoomBookings;
