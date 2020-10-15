import React, { useEffect } from 'react';

function UserBookings(props) {
  const { user, loadBookings, bookings } = props;
  useEffect(() => { loadBookings(null, user.id) }, [loadBookings, user.id]);
  return (
    <div>
        {bookings.length > 0 ? bookings.map(booking => (
          <div>
            <div>Room: {booking.roomId}</div>
            <div>User: {booking.userId}</div>
            <div>Meeting Start: {booking.start}</div>
            <div>Meeting End: {booking.finish}</div>
          </div>
        )) : (<div>Could not find any bookings</div>)}
    </div>
  );
}

export default UserBookings;
