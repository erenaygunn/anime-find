import React from 'react'
import {useGlobalContext} from "../context/global";
import { Link } from 'react-router-dom';
import "./style.css";

const Popular = () => {

  const {popularAnime,isSearch} = useGlobalContext();

  const conditionalRender = () => {
    if(!isSearch){
      return popularAnime.map((anime) => {
        console.log(anime)
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt="" />
        </Link> 
      })
    }
  }
  return (
    <div className='popular'>
      {conditionalRender()}
    </div>
  )
}

export default Popular