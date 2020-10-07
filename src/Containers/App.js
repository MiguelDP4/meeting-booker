import React from 'react';
import Options from '../Components/Options';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConferenceRooms from './ConferenceRooms';
import UserBookings from './UserBookings';
import Calendar from './Calendar';

function App() {
  const logged_in = true;
  return (
    <div className="App">
      {
        logged_in ? (
          <div>
            <Options />
            <Router>
              <Switch>
                <Route path="conference_rooms" component={ConferenceRooms} />
                <Route path="calendar" component={Calendar} />
                <Route path="my_bookings" component={UserBookings} />
              </Switch>
            </Router>
          </div> 
        ) : ( <div></div> )
        // ( <Login /> )
      }
      
    </div>
  );
}

export default App;
