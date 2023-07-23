import React from 'react'
import "./home.css"
import Image from "../images/illustration.png";

const Home = () => {
  return (
    <div className='main'>
        <div className="background"></div>
        <div className='left'>
            <h1>Anime Find</h1>
            <p>Search, find, discover animes!</p>
            <img src={Image} alt="" />
        </div>
    </div>
  )
}

export default Home