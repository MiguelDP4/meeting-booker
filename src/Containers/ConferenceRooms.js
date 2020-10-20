import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import room1 from '../RoomImages/room1.jpg';
import room2 from '../RoomImages/room2.jpg';
import room3 from '../RoomImages/room3.jpg';
import room4 from '../RoomImages/room4.jpg';
import room5 from '../RoomImages/room5.jpg';
import room6 from '../RoomImages/room6.jpg';
import room7 from '../RoomImages/room7.jpg';

const ConferenceRooms = props => {
  const { conferenceRooms, loadRooms } = props;

  useEffect(() => { loadRooms(); }, [loadRooms]);

  const chooseRoomImage = roomId => {
    switch (roomId) {
      case 1:
        return room1;
      case 2:
        return room2;
      case 3:
        return room3;
      case 4:
        return room4;
      case 5:
        return room5;
      case 6:
        return room6;
      case 7:
        return room7;
      default:
        return room1;
    }
  };

  return (
    <div className="conference-room-container">
      <div className="conference-room-list">
        {
        conferenceRooms.map(room => (
          <div key={`room-${room.id}`} className="conference-room">
            <div className="conference-room-info">
              <h3>
                <b>Room</b>
                {' '}
                {room.id}
              </h3>
              <div>
                <b>Size:</b>
                {' '}
                {room.size}
              </div>
              <div>
                <b>Projector:</b>
                {' '}
                {room.projector ? 'yes' : 'no'}
              </div>
            </div>
            <div className="conference-room-image">
              <img src={chooseRoomImage(room.id)} alt={`room_${room.id}_image`} />
            </div>
            <div className="conference-room-buttons">
              <Link key={`room-${room.id}-booker-link`} to={`/book_room_${room.id}`}>
                Book This Room
              </Link>
              <Link key={`room-${room.id}-bookings-link`} to={`/bookings_room_${room.id}`}>
                Check this room&apos;s bookings
              </Link>
            </div>

          </div>
        ))
        }
      </div>
    </div>
  );
};

ConferenceRooms.propTypes = {
  conferenceRooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    size: PropTypes.number,
    projector: PropTypes.bool,
  })).isRequired,
  loadRooms: PropTypes.func.isRequired,
};

export default ConferenceRooms;
