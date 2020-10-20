import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { PropTypes } from 'prop-types';

const BookRoom = props => {
  const {
    handleChange,
    submit,
    room,
    bookData,
    changeRoom,
    posted,
  } = props;

  useEffect(() => {
    changeRoom(room.id);
  }, [room.id, changeRoom]);

  const bookingDate = posted.start ? Date.parse(posted.start) : Date.now();

  return (
    <div className="book-room-window">
      <div className="book-room-container">
        <form className="book-creation-bar" onSubmit={submit}>
          <input type="hidden" id="room-id" name="room-id" value={room.id} />
          <label htmlFor="book-date">
            Date:
            <input
              type="date"
              id="book-date"
              name="book-date"
              onChange={handleChange}
              value={bookData.date}
            />
          </label>

          <label htmlFor="book-time">
            Time:
            <input
              type="time"
              id="book-time"
              name="book-time"
              onChange={handleChange}
              value={bookData.time}
            />
          </label>

          <label htmlFor="book-duration">
            How many minutes will you use the conference room?
            <input
              type="number"
              id="book-duration"
              name="book-duration"
              onChange={handleChange}
              value={bookData.duration}
            />
          </label>

          <input className="book-button" type="submit" value="Book This Room" />
        </form>
        {posted.start && (
        <div>
          <h3>Posted!</h3>
          <div>
            Room
            {posted.roomId}
          </div>
          <div>
            Booked for
            {format(new Date(bookingDate),
              'EEEE, MMMM d, yyyy | p')}
          </div>
        </div>
        )}
      </div>
    </div>

  );
};

BookRoom.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number,
    size: PropTypes.number,
    projector: PropTypes.bool,
  }).isRequired,
  bookData: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    roomId: PropTypes.number,
    duration: PropTypes.number,
    time: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  posted: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    roomId: PropTypes.number,
    start: PropTypes.string,
    finish: PropTypes.string,
  }).isRequired,
  changeRoom: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default BookRoom;
