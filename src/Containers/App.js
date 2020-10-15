import React from "react";
import { addMinutes } from 'date-fns'
import { connect } from 'react-redux';
import Options from "../Components/Options";
import BookRoom from "../Components/BookRoom";
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConferenceRooms from "./ConferenceRooms";
import UserBookings from "./UserBookings";
import AllBookings from "./AllBookings";
import RoomBookings from "./RoomBookings";
import Welcome from "../Components/Welcome";
import { logIn,
         logOut,
         loadRooms,
         loadBookings,
         createBooking,
         clearBookings,
        } from "../actions/index";
import Login from "../Components/Login";

class App extends React.Component {
  constructor() {
    super();

    this.logOut = this.logOut.bind(this);
    this.handleChangeSelectedRoom = this.handleChangeSelectedRoom.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
    this.handleBookingChange = this.handleBookingChange.bind(this);
    this.handleSearchBookingChange = this.handleSearchBookingChange.bind(this);
    this.searchBookingByDate = this.searchBookingByDate.bind(this);
    this.clearLocalBookings = this.clearLocalBookings.bind(this);
    this.state = {
      newBooking: {
        room: "",
        date: "",
        time: "",
        duration: "30",
      },
      searchBooking: {
        userId: "",
        roomId: "",
        start: "",
        finish: "",
      },
    }
  }

  logOut() {
    const { user, logOut } = this.props;
    this.setState({
      newBooking: {
        room: "",
        date: "",
        time: "",
        duration: "30",
      },
      searchBooking: {
        userId: "",
        roomId: "",
        start: "",
        finish: "",
      },
    });
    logOut();
  }

  handleLogIn() {
    const { logIn } = this.props;
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('user-password').value;
    logIn(username, password);
  }

  searchBooking(roomId = null, userId = null, 
                lowLimit = null,
                highLimit = null) {
    const { searchBooking } = this.props;
    searchBooking(roomId, userId, lowLimit, highLimit);
  }

  searchBookingByDate(event) {
    const { searchBooking } = this.state
    this.searchBooking(searchBooking.roomId, null, searchBooking.start, searchBooking.finish);
    event.preventDefault();
  }

  clearLocalBookings() {
    const { clearBookings, bookings } = this.props;
    clearBookings();
  }

  handleBooking(event) {
    const { bookRoom, user } = this.props;
    const { newBooking } = this.state;
    const date = newBooking.date;
    const room = newBooking.room;
    const time = newBooking.time;
    const duration = newBooking.duration;
    const start = new Date(Date.parse(`${date} ${time}`));
    const finish = addMinutes(start, duration);
    bookRoom(room, user.id, start, finish);
    event.preventDefault();
  }

  handleChangeSelectedRoom(roomId) {
    this.setState({
      ...this.state,
      newBooking: {
        ...this.state.newBooking,
        room: roomId,
      }
    });
  }

  handleBookingChange(event) {
    const { newBooking } = this.state;
    let newState = {};
    switch(event.target.id) {
    case "book-date":
      newState = {
        ...newBooking,
        date: event.target.value,
      };
      break;
    case "book-time":
      newState = {
        ...newBooking,
        time: event.target.value,
      };
      break;
      case "book-duration":
      newState = {
        ...newBooking,
        duration: event.target.value,
      };
      break;
      default:
      newState = {
        ...newBooking,
      };
    }
    this.setState({
      ...this.state,
      newBooking: newState,
    });
  }

  handleSearchBookingChange(event) {
    const { searchBooking } = this.state;
    let newState = {};
    switch(event.target.id) {
    case "start-book-date":
      newState = {
        ...searchBooking,
        start: event.target.value,
      };
      break;
    case "finish-book-date":
      newState = {
        ...searchBooking,
        finish: event.target.value,
      };
      break;
      case "user-id-search":
      newState = {
        ...searchBooking,
        userId: event.target.value,
      };
      case "room-id-search":
      newState = {
        ...searchBooking,
        roomId: event.target.value,
      };
      break;
      default:
      newState = {
        userId: "",
        roomId: "",
        start: "",
        finish: "",
      };
    }
    this.setState({
      ...this.state,
      searchBooking: newState,
    });
  }

  render() {
    const { user,
            rooms,
            loadRooms,
            bookings,
            searchBooking,
          } = this.props;
    return (
      <Router>
        <div className="App">
        {
          user.loggedIn ? (
            <div>
              <Options logOut={this.logOut} clearBookings={this.clearLocalBookings} />
                <Switch>
                  <Route path="/" exact component={Welcome} />
                  <Route path="/conference_rooms" render={() => (
                    <ConferenceRooms loadRooms={loadRooms}
                                     conferenceRooms={rooms.rooms}  />
                  )} />
                  <Route path="/search_bookings" render={() => (
                    <AllBookings loadBookings={this.searchBookingByDate}
                                 bookings={bookings.bookings}
                                 handleChange={this.handleSearchBookingChange}/>
                  )} />
                  <Route path="/my_bookings" render={() => (
                    <UserBookings user={user}
                                  loadBookings={searchBooking}
                                  bookings={bookings.bookings}
                    />
                  )} />
                {rooms.rooms.length > 0 && rooms.rooms.map(room => (
                  <Route key={`book-room-${room.id}-link`} path={`/book_room_${room.id}`} render={() => (
                    <BookRoom submit={this.handleBooking} 
                              handleChange={this.handleBookingChange} 
                              room={room}
                              bookData={this.state.newBooking}
                              posted={bookings}
                              changeRoom={this.handleChangeSelectedRoom}/>
                  )} />
                ))}
                {rooms.rooms.length > 0 && rooms.rooms.map(room => (
                    <Route key={`bookings-room-${room.id}-link`} 
                    path={`/bookings_room_${room.id}`}
                    render={() => (
                      <RoomBookings room={room}
                                    loadBookings={searchBooking}
                                    bookings={bookings.bookings}
                      />
                  )} />
                ))}
                </Switch>
            </div>
          ) : (
            <div>
              <Login clickLogIn={this.handleLogIn} />
              <Welcome />
            </div>
          )
        }
      </div>
    </Router>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  rooms: PropTypes.shape({
    pending: PropTypes.bool,
    rooms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      size: PropTypes.number,
      projector: PropTypes.bool,
    }))
  })
}

const mapStateToProps = state => ({
  user: state.user,
  rooms: state.rooms,
  bookings: state.bookings,
});

const mapDispatchToProps = dispatch => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
  logOut: () => dispatch(logOut()),
  loadRooms: () => dispatch(loadRooms()),
  clearBookings: () => dispatch(clearBookings()),
  searchBooking: (roomId = null, 
                  userId = null, 
                  lowLimit = null,
                  highLimit = null) => dispatch(loadBookings(roomId, userId, lowLimit, highLimit)),
  bookRoom: (roomId,
             userId,
             start,
             finish) => dispatch(createBooking(roomId, userId, start, finish)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
