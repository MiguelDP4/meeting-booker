import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
  const {logOut} = props;
  return (
    <div className="options-container">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/conference_rooms"><li>Conference Rooms</li></Link>
        <Link to="/search_bookings"><li>Search Bookings</li></Link>
        <Link to="/my_bookings"><li>My Bookings</li></Link>
        <Link to="/" onClick={logOut} ><li>Log Out</li></Link>
      </ul>
    </div>
  );
}

export default Options;
