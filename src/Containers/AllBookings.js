import React from 'react';
import Booking from '../Components/Booking';

function AllBookings(props) {
  const { loadBookings,
          bookings,
          handleChange,
          user,
          deleteBooking,
        } = props;
  
  return (
    <div>
      <form onSubmit={loadBookings}>
        <span>Search Bookings</span>
        <label>From:</label>
        <input type="date"
              id="start-book-date"
              name="start-book-date"
              onChange={handleChange} />
        <label>To:</label>
        <input type="date"
              id="finish-book-date"
              name="finish-book-date"
              onChange={handleChange} />
        <label>Room:</label>
        <input type="number"
              id="room-id-search"
              name="room-id-search"
              onChange={handleChange} />
        <button type="submit">
          Search
        </button>
      </form>
      <div>
        {bookings.length > 0 ? bookings.map(booking => (
          <Booking bookingsList={bookings} bookingInfo={booking} user={user} deleteBooking={deleteBooking} />
        )) : (<div>Could not find any bookings</div>)}
      </div>
    </div>
  );
}

export default AllBookings;
