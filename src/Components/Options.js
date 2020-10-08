import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Options = () => {
  return (
    <Router>
      <div className="options-container">
        <ul>
          <li><Link to="/conference_rooms">Conference Rooms</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/my_bookings">My bookings</Link></li>
          <li><Link to="/log_out">Log Out</Link></li>
        </ul>
      </div>
    </Router>
  );
}

export default Options;
