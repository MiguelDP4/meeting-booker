import React, { useEffect } from 'react';
import Booking from '../Components/Booking';

function UserBookings(props) {
  const { user, loadBookings, bookings } = props;
  useEffect(() => { loadBookings(null, user.id) }, [loadBookings, user.id]);
  return (
    <div>
        {bookings.length > 0 ? bookings.map(booking => (
          <Booking bookingInfo={booking} user={user} />
        )) : (<div>Could not find any bookings</div>)}
    </div>
  );
}

export default UserBookings;
