import React from 'react'
import "./home.css"
import Image from "../images/illustration.png";
import SearchBar from '../components/SearchBar/SearchBar';

const Home = () => {
  return (
    <div className='main'>
        <div className='left'>
            <h1>Anime Find</h1>
            <p>Search, find, discover animes!</p>
            <img src={Image} alt="" />
        </div>
        <div className="right">
          <SearchBar />
        </div>
    </div>
  )
}

export default Home