import React, { useEffect } from 'react';

function UserBookings(props) {
  const { user, loadBookings, bookings } = props;
  useEffect(() => { loadBookings(null, user.id) }, [loadBookings, user.id]);
  return (
    <div>
      {bookings.map(booking => (
        <div key={`user-${user.id}-booking-${booking.id}`}>
          {booking.id}
        </div>
        ))}
    </div>
  );
}

export default UserBookings;
