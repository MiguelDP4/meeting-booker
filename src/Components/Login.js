import React from 'react';

const Login = (props) => {
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

export default Login;