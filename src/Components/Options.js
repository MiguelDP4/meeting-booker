import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
  const { logOut, clearBookings, switchPage, activePage } = props;

  const logOutAndClear = (event) => {
    switchPage(event.target.id);
    logOut();
    clearBookings();
  }

  const changePage = (event) => {
    clearBookings();
    switchPage(event.target.id);
  }

  return (
    <div className="options-container">
      <Link id="home" className={`options-link ${
        activePage === "home" && "main-color-background"
      }`}
      to="/" 
      onClick={changePage}>HOME</Link>
      <Link id="conference_rooms" className={`options-link ${
        activePage === "conference_rooms" && "main-color-background"
      }`}
      to="/conference_rooms"
      onClick={changePage}>CONFERENCE ROOMS</Link>
      <Link id="search_bookings" className={`options-link ${
        activePage === "search_bookings" && "main-color-background"
      }`}
      to="/search_bookings"
      onClick={changePage}>SEARCH BOOKINGS</Link>
      <Link id="my_bookings" className={`options-link ${
        activePage === "my_bookings" && "main-color-background"
      }`}
      to="/my_bookings"
      onClick={changePage}>MY BOOKINGS</Link>
      <Link id="log_out" className={`options-link ${
        activePage === "log_out" && "main-color-background"
      }`}
      to="/"
      onClick={logOutAndClear} >LOG OUT</Link>
    </div>
  );
}

export default Options;
