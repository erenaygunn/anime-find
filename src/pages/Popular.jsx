import React from 'react'
import {useGlobalContext} from "../context/global";
import { Link } from 'react-router-dom';
import "./style.css";
import Navbar from "../components/Navbar/Navbar";
import PrevButton from "../components/PrevButton/PrevButton";

const Popular = () => {

  const {getPopularAnime, popularAnime,isSearch} = useGlobalContext();

  React.useEffect(() => {
    getPopularAnime();
}, [])

  const conditionalRender = () => {
    if(!isSearch){
      return popularAnime.map((anime) => {
        console.log(anime)
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
        <h1>Popular Animes</h1>
      </header>
      <div className='popular'>
        {conditionalRender()}
      </div>
    </div>
  )
}

export default Popular