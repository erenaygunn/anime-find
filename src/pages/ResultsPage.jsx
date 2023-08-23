import React from 'react'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom';
import  Navbar  from '../components/Navbar/Navbar';
import PrevButton from "../components/PrevButton/PrevButton";

const SearchResults = () => {

  const {isSearch, searchResults, search} = useGlobalContext()

  

  const conditionalRender = () => {
    if(isSearch){
      return searchResults?.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <h4>{anime.title_english}</h4>
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