import React from 'react';

const BookRoom = (props) => {
  const { bookRoom, room } = props;
  return (
    <div>
      <label>Date: </label>
      <input type="date" id="book-date" name="book-date" />
      <label>Time: </label>
      <input type="time" id="book-time" name="book-time" />
      <label>How many minutes will you use the conference room?</label>
      <input type="number" value="30" id="book-duration" name="book-duration" />
      <button type="button" onClick={bookRoom}>Book This Room</button>
    </div>
  );
}

export default BookRoom;
