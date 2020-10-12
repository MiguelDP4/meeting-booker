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
        } from "../actions/index";
import Login from "../Components/Login";

class App extends React.Component {
  constructor() {
    super();

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
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

  handleBooking(roomId, userId, start, duration) {

  }

  render() {
    const { user, rooms, loadRooms } = this.props;
    return (
      <Router>
        <div className="App">
        {
          !user.loggedIn ? (
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
                      <BookRoom bookRoom={this.handleBooking} room={room} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
