import React from 'react';

function Nav(props) {
  return (
    <div className='navbar'>
      <a href="./view-cards">View Cards</a>
      <a href="./review-cards">Review Cards</a>
      <a href="./create-card">Create Card</a>
    </div>
  );
}

export default Nav;
