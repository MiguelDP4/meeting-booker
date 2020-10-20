import React from 'react';
import room2 from '../RoomImages/room2.jpg';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h2>WELCOME TO FICTICIOUS ENTERPRISES MEETING ROOM BOOKING UTILITY</h2>
        <img src={room2} className="welcome-page-image" alt="welcome_page_background" />
      </div>
    </div>
  );
}

export default Welcome;
