import React from 'react';
import { addMinutes } from 'date-fns';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Options from '../Components/Options';
import BookRoom from '../Components/BookRoom';
import ConferenceRooms from './ConferenceRooms';
import UserBookings from './UserBookings';
import AllBookings from './AllBookings';
import RoomBookings from './RoomBookings';
import Welcome from '../Components/Welcome';
import {
  logIn,
  logOut,
  loadRooms,
  loadBookings,
  createBooking,
  clearBookings,
  deleteBooking,
} from '../actions/index';
import Login from '../Components/Login';

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
    this.deleteBooking = this.deleteBooking.bind(this);
    this.changeActivePage = this.changeActivePage.bind(this);
    this.state = {
      activePage: 'home',
      newBooking: {
        bookingId: '',
        room: '',
        date: '',
        time: '',
        duration: '30',
      },
      searchBooking: {
        bookingId: '',
        userId: '',
        roomId: '',
        start: '',
        finish: '',
      },
    };
  }

  changeActivePage(newActivePage) {
    this.setState({
      activePage: newActivePage,
    });
  }

  logOut() {
    const { logOut } = this.props;
    this.setState({
      newBooking: {
        bookingId: '',
        room: '',
        date: '',
        time: '',
        duration: '30',
      },
      searchBooking: {
        bookingId: '',
        userId: '',
        roomId: '',
        start: '',
        finish: '',
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
    const { searchBooking } = this.state;
    this.searchBooking(searchBooking.roomId, null, searchBooking.start, searchBooking.finish);
    event.preventDefault();
  }

  clearLocalBookings() {
    const { clearBookings } = this.props;
    clearBookings();
  }

  handleBooking(event) {
    const { bookRoom, user } = this.props;
    const { newBooking } = this.state;
    const { date } = newBooking;
    const { room } = newBooking;
    const { time } = newBooking;
    const { duration } = newBooking;
    const start = new Date(Date.parse(`${date} ${time}`));
    const finish = addMinutes(start, duration);
    bookRoom(room, user.id, start, finish);
    event.preventDefault();
  }

  deleteBooking(bookingId) {
    const { deleteBooking } = this.props;
    deleteBooking(bookingId);
  }

  handleChangeSelectedRoom(roomId) {
    this.setState({
      newBooking: {
        room: roomId,
      },
    });
  }

  handleChangeSelectedBooking(bookingId) {
    this.setState({
      newBooking: {
        booking: bookingId,
      },
    });
  }

  handleBookingChange(event) {
    const { newBooking } = this.state;
    let newState = {};
    switch (event.target.id) {
      case 'book-date':
        newState = {
          ...newBooking,
          date: event.target.value,
        };
        break;
      case 'book-time':
        newState = {
          ...newBooking,
          time: event.target.value,
        };
        break;
      case 'book-duration':
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
      newBooking: newState,
    });
  }

  handleSearchBookingChange(event) {
    const { searchBooking } = this.state;
    let newState = {};
    switch (event.target.id) {
      case 'start-book-date':
        newState = {
          ...searchBooking,
          start: event.target.value,
        };
        break;
      case 'finish-book-date':
        newState = {
          ...searchBooking,
          finish: event.target.value,
        };
        break;
      case 'user-id-search':
        newState = {
          ...searchBooking,
          userId: event.target.value,
        };
        break;
      case 'room-id-search':
        newState = {
          ...searchBooking,
          roomId: event.target.value,
        };
        break;
      default:
        newState = {
          userId: '',
          roomId: '',
          start: '',
          finish: '',
        };
    }
    this.setState({
      searchBooking: newState,
    });
  }

  render() {
    const {
      user,
      rooms,
      bookings,
      loadRooms,
      searchBooking,
    } = this.props;
    const { activePage, newBooking } = this.state;
    return (
      <Router>
        {
          user.loggedIn ? (
            <div className="App">
              <Options
                activePage={activePage}
                switchPage={this.changeActivePage}
                logOut={this.logOut}
                clearBookings={this.clearLocalBookings}
              />
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route
                  path="/conference_rooms"
                  render={() => (
                    <ConferenceRooms
                      loadRooms={loadRooms}
                      conferenceRooms={rooms.rooms}
                    />
                  )}
                />
                <Route
                  path="/search_bookings"
                  render={() => (
                    <AllBookings
                      loadBookings={this.searchBookingByDate}
                      bookings={bookings.bookings}
                      handleChange={this.handleSearchBookingChange}
                      user={user}
                      deleteBooking={this.deleteBooking}
                      changeBooking={this.handleChangeSelectedBooking}
                    />
                  )}
                />
                <Route
                  path="/my_bookings"
                  render={() => (
                    <UserBookings
                      user={user}
                      loadBookings={searchBooking}
                      bookings={bookings.bookings}
                      deleteBooking={this.deleteBooking}
                      changeBooking={this.handleChangeSelectedBooking}
                    />
                  )}
                />
                {rooms.rooms.length > 0 && rooms.rooms.map(room => (
                  <Route
                    key={`book-room-${room.id}-link`}
                    path={`/book_room_${room.id}`}
                    render={() => (
                      <BookRoom
                        submit={this.handleBooking}
                        handleChange={this.handleBookingChange}
                        room={room}
                        bookData={newBooking}
                        posted={bookings.posted}
                        changeRoom={this.handleChangeSelectedRoom}
                      />
                    )}
                  />
                ))}
                {rooms.rooms.length > 0 && rooms.rooms.map(room => (
                  <Route
                    key={`bookings-room-${room.id}-link`}
                    path={`/bookings_room_${room.id}`}
                    render={() => (
                      <RoomBookings
                        room={room}
                        loadBookings={searchBooking}
                        bookings={bookings.bookings}
                        deleteBooking={this.deleteBooking}
                        changeBooking={this.handleChangeSelectedBooking}
                        user={user}
                      />
                    )}
                  />
                ))}
              </Switch>
            </div>
          ) : (
            <div className="App">
              <Login clickLogIn={this.handleLogIn} user={user} />
            </div>
          )
        }
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
  }).isRequired,
  rooms: PropTypes.shape({
    pending: PropTypes.bool,
    rooms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      size: PropTypes.number,
      projector: PropTypes.bool,
    })),
  }).isRequired,
  bookings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    roomId: PropTypes.number,
    start: PropTypes.string,
    finish: PropTypes.string,
  })).isRequired,
  logOut: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  loadRooms: PropTypes.func.isRequired,
  clearBookings: PropTypes.func.isRequired,
  searchBooking: PropTypes.func.isRequired,
  bookRoom: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

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
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
