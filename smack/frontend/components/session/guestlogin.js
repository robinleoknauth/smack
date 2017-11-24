import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, login}) => {
  const guestLogin = () => (
    login({
      username: 'guest', password: '123456'
    })
  );
  if (!currentUser) {
    return (
      <div>
        <a className="login-button-guest" onClick={guestLogin}>Guest Login</a>
      </div>
    );
  }
};
