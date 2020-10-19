import React from 'react';
import Booking from '../Components/Booking';

function AllBookings(props) {
  const { loadBookings,
          bookings,
          handleChange,
          user,
          deleteBooking,
        } = props;
  
  const orderedBookings = () => {
    const newArray = bookings.sort((a,b) => {
      const numA = parseInt(a.roomId);
      const numB = parseInt(b.roomId);
      if (numA < numB) {
        return -1;
      }
      if (numA > numB) {
        return 1;
      }
      return 0;
    });
    return newArray;
  }

  return (
    <div className="booking-search-window">
      <div className="booking-search-container">
        <div className="booking-search-menu">
          <form className="booking-search-bar" onSubmit={loadBookings}>
            <h3>Search Bookings</h3>
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
                  min="1"
                  max="7"
                  onChange={handleChange} />
            <button type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="booking-search-result-list" >
            {bookings.length > 0 && orderedBookings().map(booking => (
              <Booking bookingInfo={booking} user={user} deleteBooking={deleteBooking} />
            ))}
          </div>
      </div>
    </div>
    
  );
}

export default AllBookings;
