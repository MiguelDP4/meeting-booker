import React from "react";
import { connect } from 'react-redux';
import Options from "../Components/Options";
import BookRoom from "../Components/BookRoom";
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConferenceRooms from "./ConferenceRooms";
import UserBookings from "./UserBookings";
import Calendar from "./Calendar";
import Welcome from "../Components/Welcome";
import { logIn, 
         loadRooms,
         loadBookings,
         createBooking,
        } from "../actions/index";
import Login from "../Components/Login";

class App extends React.Component {
  constructor() {
    super();

    this.handleChangeSelectedRoom = this.handleChangeSelectedRoom.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
    this.handleBookingChange = this.handleBookingChange.bind(this);
    this.state = {
      newBooking: {
        room: "",
        date: "",
        time: "",
        duration: "30",
      },
    }
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
    
  }

  handleBooking(event) {
    const { bookRoom, user } = this.props;
    const { newBooking } = this.state;
    const date = newBooking.date;
    const room = newBooking.room;
    const time = newBooking.time;
    const duration = newBooking.duration;
    const start = new Date(Date.parse(`${date} ${time}`));
    const finish = new Date(start.getTime() + duration*60000);

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

  render() {
    const { user, rooms, loadRooms, bookings } = this.props;
    return (
      <Router>
        <div className="App">
        {
          user.loggedIn ? (
            <div>
              <Options />
                <Switch>
                  <Route path="/" exact component={Welcome} />
                  <Route path="/conference_rooms" render={() => (
                    <ConferenceRooms loadRooms={loadRooms}
                                     conferenceRooms={rooms.rooms}  />
                  )} />
                  <Route path="/calendar" component={Calendar} />
                  <Route path="/my_bookings" component={UserBookings} />
                  {rooms.rooms.length > 0 ? rooms.rooms.map(room => (
                    <Route key={`book-room-${room.id}-link`} path={`/book_room_${room.id}`} render={() => (
                      <BookRoom submit={this.handleBooking} 
                                handleChange={this.handleBookingChange} 
                                room={room}
                                bookData={this.state.newBooking}
                                posted={bookings}
                                changeRoom={this.handleChangeSelectedRoom}/>
                    )} />
                  )) : <div></div>}
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
  loadRooms: () => dispatch(loadRooms()),
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
