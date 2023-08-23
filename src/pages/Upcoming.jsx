import React from 'react'
import {useGlobalContext} from "../context/global";
import { Link } from 'react-router-dom';
import "./style.css";
import Navbar from "../components/Navbar/Navbar";
import PrevButton from "../components/PrevButton/PrevButton";

const Upcoming = () => {

  const {getUpcomingAnime, upcomingAnime, isSearch} = useGlobalContext();

  React.useEffect(() => {
    getUpcomingAnime();
}, [])

  const conditionalRender = () => {
    if(!isSearch){
      return upcomingAnime.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt="" />
            <h4>{anime.title_english}</h4>
        </Link> 
      })
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <header>
        <PrevButton></PrevButton>
        <h1>Upcoming Animes</h1>
      </header>
      <div className='popular'>
        {conditionalRender()}
      </div>
    </div>
  )
}

export default Upcoming