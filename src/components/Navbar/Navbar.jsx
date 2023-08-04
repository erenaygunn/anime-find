import React from 'react'
import "./navbar.css";
import Searchbar from "../SearchBar/SearchBar"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="/">AnimeFind</a>
      <Searchbar></Searchbar>
      <div className='navlinks'>
        <a href='/airing'>AIRING</a>
        <a href='/upcoming'>UPCOMING</a>
        <a href='/upcoming'>GENRES</a>
      </div>
    </nav>
  )
}

export default Navbar