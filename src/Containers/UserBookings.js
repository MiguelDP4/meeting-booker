import React, { useEffect } from 'react';
import Booking from '../Components/Booking';

function UserBookings(props) {
  const { user, loadBookings, bookings, deleteBooking } = props;
  useEffect(() => { loadBookings(null, user.id) }, [loadBookings, user.id]);
  return (
      <div class="bookings-container">
          {bookings.length > 0 ? bookings.map(booking => (
            <Booking bookingsList={bookings} bookingInfo={booking} user={user} deleteBooking={deleteBooking}/>
          )) : (<div>Searching user bookings</div>)}
      </div>
  );
}

export default UserBookings;
