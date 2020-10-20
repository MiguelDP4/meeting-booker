import React from 'react';
import { PropTypes } from 'prop-types';

const Login = props => {
  const { clickLogIn, user } = props;
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-inputs-container">
          <input
            type="text"
            id="user-name"
            placeholder="Username"
            className="input-text"
          />
          <input
            type="password"
            id="user-password"
            placeholder="Password"
            className="input-text"
          />
          <div>
            <button type="button" onClick={clickLogIn} className="login-button">Log In</button>
            {user.pending && <span>Loading...</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  clickLogIn: PropTypes.func.isRequired,
};

export default Login;
