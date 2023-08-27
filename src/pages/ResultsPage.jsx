import React from 'react'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom';
import  Navbar  from '../components/Navbar/Navbar';
import PrevButton from "../components/PrevButton/PrevButton";
import useIntersectionObserver from '../context/useIntersectionObserver';

const SearchResults = () => {

  const {isSearch, searchResults, search} = useGlobalContext()

  const handleCardIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible');
      } else {
        entry.target.classList.remove('card-visible');
      }
    });
  };
  
  useIntersectionObserver(handleCardIntersection, {
    threshold: 1,
  });

  const conditionalRender = () => {
    if(isSearch){
      return searchResults?.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className='anime-card'>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <h4>{anime.title_english != null ? anime.title_english : anime.title}</h4>
            {anime.score != null ? <h5>🔥{anime.score}</h5> : null}
        </Link>
      }
      )
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <header>
        <PrevButton></PrevButton>
        <h1>Results for "{search}"</h1>
      </header>
      <div className='popular'>
        {conditionalRender()}
      </div>
    </div>
  )
}

export default SearchResults