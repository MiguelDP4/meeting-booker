import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
  const { logOut, clearBookings } = props;

  const logOutAndClear = () => {
    logOut();
    clearBookings();
  }

  return (
    <div className="options-container">
      <ul>
        <Link to="/" onClick={clearBookings}><li>Home</li></Link>
        <Link to="/conference_rooms" onClick={clearBookings}><li>Conference Rooms</li></Link>
        <Link to="/search_bookings" onClick={clearBookings}><li>Search Bookings</li></Link>
        <Link to="/my_bookings" onClick={clearBookings}><li>My Bookings</li></Link>
        <Link to="/" onClick={logOutAndClear} ><li>Log Out</li></Link>
      </ul>
    </div>
  );
}

export default Options;
