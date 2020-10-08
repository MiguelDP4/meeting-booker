import React from "react";
import { connect } from 'react-redux';
import Options from "../Components/Options";
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConferenceRooms from "./ConferenceRooms";
import UserBookings from "./UserBookings";
import Calendar from "./Calendar";
import { LogIn } from "../actions/index";
import Login from "../Components/Login";

class App extends React.Component {
  constructor() {
    super();

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn() {
    const { LogIn } = this.props;
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('user-password').value;
    LogIn(username, password);
  }

  render() {
    const { loggedIn, user } = this.props;
    return (
      <div className="App">
        {
          loggedIn ? (
            <div>
              <div>Username: {user.name}</div>
              <div>User ID: {user.id}</div>
              <Options />
              <Router>
                <Switch>
                  <Route path="conference_rooms" component={ConferenceRooms} />
                  <Route path="calendar" component={Calendar} />
                  <Route path="my_bookings" component={UserBookings} />
                </Switch>
              </Router>
            </div>
          ) : (
            <Login clickLogIn={this.handleLogIn} />
          )
        }
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

const mapStateToProps = state => ({
  user: state.user,
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  LogIn: (username, password) => dispatch(LogIn(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
