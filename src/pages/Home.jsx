import React from 'react'
import "./home.css"
import Image from "../images/illustration.png";
import SearchBar from '../components/SearchBar/SearchBar';
import Card from "../components/Card/Card"
import popular from "../images/trending.png";
import airing from "../images/airing.png";
import upcoming from "../images/upcoming.png";
import { Link } from "react-router-dom";

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
          <div className='cards'>
            <Link to="/popular">
              <Card source={popular} text="Check Popular Animes"/>
            </Link>
            <Link to="/airing">
              <Card source={airing} text="Check Airing Animes"/>
            </Link>
            <Link to="/upcoming">
              <Card source={upcoming} text="Check Upcoming Animes"/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home