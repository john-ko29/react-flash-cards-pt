import React from 'react';

function Nav(props) {
  let { view, review, create } = 'nav-link';
  if (props.active === 'view-cards') {
    view = 'nav-item badge-primary';
  } else if (props.active === 'review-cards') {
    review = 'nav-item badge-primary';
  } else if (props.active === 'create-card') {
    create = 'nav-item badge-primary';
  }
  console.log(props);
  return (
    <div className='navbar navbar-expand justify-content-end text-primary'>
      <ul className='navbar-nav'>
        <li className={view}>
          <a className='nav-link' onClick={() => props.setView('view-cards')}>View Cards</a>
        </li>
        <li className={review}>
          <a className='nav-link' onClick={() => props.setView('review-cards')}>Review Cards</a>
        </li>
        <li className={create}>
          <a className='nav-link' onClick={() => props.setView('create-card')}>Create Card</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
