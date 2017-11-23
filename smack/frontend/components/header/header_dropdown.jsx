
import React from 'react';

const Dropdown = ({logout, currentUser}) => {
  return (
    <div className='dropdown'>
      <ul>

        <li className='dropdown-user'>Username: {currentUser.username}</li>
        <li className='dropdown-logout'><div onClick={logout}>Sign Out</div></li>
      </ul>

    </div>
  );

};

export default Dropdown;
