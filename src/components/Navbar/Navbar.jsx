import React from 'react'
import "./navbar.css";
import Searchbar from "../SearchBar/SearchBar"
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  document.addEventListener('DOMContentLoaded', (event) => {

    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
      if((link.getAttribute('href')) === window.location.pathname){
        link.classList.add('active')
        }
      });
    }
  )

  return (
    <nav className='navbar'>
      <a href="/" className='logo'>AnimeFind</a>
      <Searchbar></Searchbar>
      <ul className='nav-links'>
        <li><NavLink to="/popular">POPULAR</NavLink></li>
        <li><NavLink to="/airing">AIRING</NavLink></li>
        <li><NavLink to="/upcoming">UPCOMING</NavLink></li>
        <li><NavLink to="/genres">GENRES</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar