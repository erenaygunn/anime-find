import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="/">AnimeFind</a>
      <div className='navlinks'>
        <a href='/airing'>Airing</a>
        <a href='/upcoming'>Upcoming</a>
        <a href='/upcoming'>Genres</a>
      </div>
    </nav>
  )
}

export default Navbar