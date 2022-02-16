import React from 'react'
import {Link} from 'react-router-dom'
import user from '../../Images/user.png'
import "./Header.scss"

function Header() {
  return (
    <div className="header">
      <Link to="/">
      <div className="logo">Back6 Movies</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header 