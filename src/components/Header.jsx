import React from 'react';
// importing Link tag from react router
import { NavLink } from 'react-router-dom';

function Header() {
  return (<>
    <nav>Get ready to complete your Daily Goals</nav>
    <div className='header'>
        {/* insted of anchor tag we are using Link tag for routing data */}
        {/* <a href='/'> Home</a> */}

        <NavLink to='/'> Home</NavLink>
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/contact'> Contact</NavLink>
        <NavLink to='/user/'> User</NavLink>
    </div>
    </>
  )
}

export default Header;