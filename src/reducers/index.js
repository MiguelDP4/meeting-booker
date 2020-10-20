import {
  combineReducers,
} from 'redux';

import user from './user';
import bookings from './bookings';
import rooms from './rooms';

export default combineReducers({
  rooms,
  bookings,
  user,
});
