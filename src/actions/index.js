import { LOG_IN_ERROR,
         LOG_IN_PENDING,
         LOG_IN_SUCCESS,
        } from '../constants';
import { ApiLogIn } from '../ApiCalls'


const LogInPending = pending => ({
  type: LOG_IN_PENDING,
  pending
});

const LogInError = user => ({
  type: LOG_IN_ERROR,
  user
})

const LogInSuccess = user => ({
  type: LOG_IN_SUCCESS,
  user
});

export const LogIn = (username, password) => async dispatch => {
  dispatch(LogInPending());
  const response = await ApiLogIn(username, password);
  console.log(response);
  return dispatch(LogInSuccess(response))
}