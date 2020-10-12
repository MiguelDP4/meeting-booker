import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ConferenceRooms(props) {
  const { conferenceRooms, loadRooms,  } = props;

  useEffect(() => { loadRooms() }, [loadRooms]);

  return (
    <div>
      {
      conferenceRooms.map(room => (
          <div key={`room-${room.id}`}>
            <div>Room {room.id}</div>
            <div>Size: {room.size}</div>
            <div>Projector: {room.projector ? "yes" : "no"}</div>
            <Link to={`/book_room_${room.id}`}>
              Book This Room
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default ConferenceRooms;
