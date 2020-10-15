import React from 'react';

const Login = (props) => {
  const { clickLogIn } = props;
  return (
    <div>
      <input
        type="text"
        id="user-name"
        placeholder="Username"
        className=""
      />
      <input
        type="password"
        id="user-password"
        placeholder="Password"
        className=""
      />
      <button type="button" onClick={clickLogIn}>Log In</button>
    </div>
  );
};

export default Login;