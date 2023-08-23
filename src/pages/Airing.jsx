import React from 'react'
import {useGlobalContext} from "../context/global";
import { Link } from 'react-router-dom';
import "./style.css";
import Navbar from "../components/Navbar/Navbar";

const Airing = () => {

  const {getAiringAnime, airingAnime, isSearch} = useGlobalContext();

  React.useEffect(() => {
    getAiringAnime();
}, [])

  const conditionalRender = () => {
    if(!isSearch){
      return airingAnime.map((anime) => {
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
      <div className='popular'>
        {conditionalRender()}
      </div>
    </div>
  )
}

export default Airing