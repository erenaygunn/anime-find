import React from 'react'
import "./navbar.css";
import Searchbar from "../SearchBar/SearchBar"

const Navbar = () => {

  
  const navLinks = document.querySelectorAll('.nav-links li a');

  navLinks.forEach(link => {
    if((link.getAttribute('href')) === window.location.pathname){
      link.classList.add('active')
    }
  });

  return (
    <nav className='navbar'>
      <a href="/">AnimeFind</a>
      <Searchbar></Searchbar>
      <ul className='nav-links'>
        <li><a href='/popular'>POPULAR</a></li>
        <li><a href='/airing'>AIRING</a></li>
        <li><a href='/upcoming'>UPCOMING</a></li>
        <li><a href='/genres'>GENRES</a></li>
      </ul>
    </nav>
  )
}

export default Navbar