import React from 'react'
import "./navbar.css";
import Searchbar from "../SearchBar/SearchBar"
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/global';

const Navbar = () => {

  const {
    setSearch,
  } = useGlobalContext()


  //clears search input when navigating to a different page
  const handleClick = () => {
    if (location.pathname === '/searchresults') {
      setSearch('');
    }
  }

  return (
    <nav className='navbar'>
      <a href="/" className='logo'>AnimeFind</a>
      <Searchbar></Searchbar>
      <ul className='nav-links'>
        <li><NavLink to="/popular" onClick={handleClick}>POPULAR</NavLink></li>
        <li><NavLink to="/airing" onClick={handleClick}>AIRING</NavLink></li>
        <li><NavLink to="/upcoming" onClick={handleClick}>UPCOMING</NavLink></li>
        <li><NavLink to="/genres" onClick={handleClick}>GENRES</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar