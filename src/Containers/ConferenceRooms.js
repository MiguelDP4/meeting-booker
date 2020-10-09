import React, { useEffect } from 'react';

function ConferenceRooms(props) {
  const { conferenceRooms, loadRooms } = props;

  console.log(props);
  return (
    <div>
      { 
      conferenceRooms && 
      conferenceRooms.map(room => (
          <div>
            <div>Size: {room.size}</div>
            <div>Projector: {room.projector}</div>
          </div>
        ))
      }
    </div>
  );
}

export default ConferenceRooms;
