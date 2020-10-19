import React from 'react';
import { format } from 'date-fns';

const Booking = (props) => {
  const { bookingInfo, user, deleteBooking } = props;
  const deleteMethod = () => {
    deleteBooking(bookingInfo.id);
  }
  const bookingStartDate = Date.parse(bookingInfo.start);
  const bookingFinishDate = Date.parse(bookingInfo.finish);
  return (
    <div className="booking">
      <div className="booking-info">
        <div><b>Room:</b> {bookingInfo.roomId}</div>
        <div><b>Meeting Start:</b> {format(new Date(bookingStartDate), 'EEEE, MMMM d, yyyy | p')}</div>
        <div><b>Meeting End:</b> {format(new Date(bookingFinishDate), 'EEEE, MMMM d, yyyy | p')}</div>
      </div>
      { bookingInfo.userId === user.id && (
        <div className="delete-booking-button">
          <button key={`booking-${bookingInfo.id}-delete`}
             href="#" onClick={deleteMethod}>Delete This Booking</button>
        </div>
        )
      }
    </div>
  );
}

export default Booking;
