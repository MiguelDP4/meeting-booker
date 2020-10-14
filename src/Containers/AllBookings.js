import React from 'react';

function AllBookings(props) {
  const { loadBookings, bookings, handleChange } = props;
  
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
          <div>
            <div>Room: {booking.roomId}</div>
            <div>User: {booking.userId}</div>
            <div>Meeting Start: {booking.start}</div>
            <div>Meeting End: {booking.finish}</div>
          </div>
        )) : (<div>Could not find any bookings</div>)}
      </div>
    </div>
  );
}

export default AllBookings;
