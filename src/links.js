import React from 'react'
import {NavLink} from 'react-router-dom'


const Links = () => {
  return (
    <div className='horizontal-list'>
      <NavLink to="home">
            <span>home</span>
            </NavLink>
      <NavLink to="login"><span>login</span></NavLink>
      <NavLink to="signup"><span>signup</span></NavLink>
    </div>
  );
}

export default Links