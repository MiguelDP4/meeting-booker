import React from 'react';
import { PropTypes } from 'prop-types';
import Booking from '../Components/Booking';

const AllBookings = props => {
  const {
    loadBookings,
    bookings,
    handleChange,
    user,
    deleteBooking,
  } = props;

  const orderedBookings = () => {
    const newArray = bookings.sort((a, b) => {
      const numA = parseInt(a.roomId, 10);
      const numB = parseInt(b.roomId, 10);
      if (numA < numB) {
        return -1;
      }
      if (numA > numB) {
        return 1;
      }
      return 0;
    });
    return newArray;
  };

  return (
    <div className="booking-search-window">
      <div className="booking-search-container">
        <div className="booking-search-menu">
          <form className="booking-search-bar" onSubmit={loadBookings}>
            <h3>Search Bookings</h3>
            <label htmlFor="start-book-date">
              From:
              <br />
              <input
                type="date"
                id="start-book-date"
                name="start-book-date"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="finish-book-date">
              To:
              <br />
              <input
                type="date"
                id="finish-book-date"
                name="finish-book-date"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="room-id-search">
              Room:
              <br />
              <input
                type="number"
                id="room-id-search"
                name="room-id-search"
                min="1"
                max="7"
                onChange={handleChange}
              />
            </label>
            <button type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="booking-search-result-list">
          {bookings.length > 0 && orderedBookings().map(booking => (
            <Booking
              key={`booking-${booking.id}-found`}
              bookingInfo={booking}
              user={user}
              deleteBooking={deleteBooking}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

AllBookings.propTypes = {
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  bookings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    roomId: PropTypes.number,
    start: PropTypes.string,
    finish: PropTypes.string,
  })).isRequired,
  deleteBooking: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loadBookings: PropTypes.func.isRequired,
};

export default AllBookings;
