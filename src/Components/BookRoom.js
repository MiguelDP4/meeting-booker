import React, { useEffect } from 'react';
import { format } from 'date-fns';

const BookRoom = (props) => {
  const { handleChange,
          submit,
          room,
          bookData,
          changeRoom,
          posted
        } = props;

  useEffect(() => {
    changeRoom(room.id);
  }, [room.id, changeRoom]);

  const bookingDate = posted.start ? Date.parse(posted.start) : Date.now();

  return (
    <div className="book-room-window">
      <div className="book-room-container">
        <form className="book-creation-bar" onSubmit={submit}>
          <input type="hidden" id="room-id" name="room-id" value={room.id}/>
          <label>Date: </label>
          <input type="date"
                id="book-date"
                name="book-date"
                onChange={handleChange}
                value={bookData.date} />
          <label>Time: </label>
          <input type="time"
                id="book-time"
                name="book-time"
                onChange={handleChange}
                value={bookData.time} />
          <label>How many minutes will you use the conference room?</label>
          <input type="number"
                id="book-duration"
                name="book-duration"
                onChange={handleChange} 
                value={bookData.duration}/>
          <input class="book-button" type="submit" value="Book This Room"></input>
        </form>
        {posted.start && (
        <div>
          <h3>Posted!</h3>
          <div>Room {posted.roomId}</div>
          <div>Booked for{format(new Date(bookingDate),
                                'EEEE, MMMM d, yyyy | p')}
          </div>
        </div>
      )}
      </div>
    </div>
    
  );
}

export default BookRoom;
