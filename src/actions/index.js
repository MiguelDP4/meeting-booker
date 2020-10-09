import { LOG_IN_ERROR,
         LOG_IN_PENDING,
         LOG_IN_SUCCESS,
         GET_ROOMS_ERROR,
         GET_ROOMS_PENDING,
         GET_ROOMS_SUCCESS,
        } from '../constants';
import {  ApiLogIn,
          ApiGetRooms
       } from '../ApiCalls'


const LogInPending = pending => ({
  type: LOG_IN_PENDING,
  pending
});

const LogInError = user => ({
  type: LOG_IN_ERROR,
  name: user.name,
  id: user.id,
})

const LogInSuccess = user => ({
  type: LOG_IN_SUCCESS,
  name: user.name,
  id: user.id,
});

export const logIn = (username, password) => async dispatch => {
  dispatch(LogInPending());
  const response = await ApiLogIn(username, password);
    if(response.name) {
    return dispatch(LogInSuccess(response))
  } else {
    return dispatch(LogInError({name: null, id: null}));
  }
}

const LoadRoomsPending = pending => ({
  type: GET_ROOMS_PENDING,
  pending
});

const LoadRoomsError = error => ({
  type: GET_ROOMS_ERROR,
  error
})

const LoadRoomsSuccess = rooms => ({
  type: GET_ROOMS_SUCCESS,
  rooms
});

export const loadRooms = () => async dispatch => {
  dispatch(LoadRoomsPending());
  const response = await ApiGetRooms();
    if(response[0]) {
    return dispatch(LoadRoomsSuccess(response))
  } else {
    return dispatch(LoadRoomsError({
      message: 'Could not find rooms'
    }));
  }
}